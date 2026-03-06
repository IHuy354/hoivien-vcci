/**
 * Geolocation Utility Functions
 * Handles user location detection and distance calculations
 */

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface GeolocationResult {
  success: boolean;
  coordinates?: Coordinates;
  error?: string;
}

/**
 * Get user's current location using browser Geolocation API
 * @returns Promise with coordinates or error
 */
export const getCurrentLocation = (): Promise<GeolocationResult> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        success: false,
        error: "Trình duyệt không hỗ trợ định vị",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          success: true,
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      },
      (error) => {
        let errorMessage = "Không thể lấy vị trí";
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Bạn đã từ chối quyền truy cập vị trí";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Thông tin vị trí không khả dụng";
            break;
          case error.TIMEOUT:
            errorMessage = "Hết thời gian lấy vị trí";
            break;
        }
        
        resolve({
          success: false,
          error: errorMessage,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
};

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param coord1 First coordinate
 * @param coord2 Second coordinate
 * @returns Distance in meters
 */
export const calculateDistance = (
  coord1: Coordinates,
  coord2: Coordinates
): number => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (coord1.lat * Math.PI) / 180;
  const φ2 = (coord2.lat * Math.PI) / 180;
  const Δφ = ((coord2.lat - coord1.lat) * Math.PI) / 180;
  const Δλ = ((coord2.lng - coord1.lng) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return Math.round(distance); // Return distance in meters (rounded)
};

/**
 * Check if user is within allowed radius
 * @param userCoords User's current coordinates
 * @param checkpointCoords Checkpoint coordinates
 * @param allowedRadius Allowed radius in meters
 * @returns true if within radius, false otherwise
 */
export const isWithinRadius = (
  userCoords: Coordinates,
  checkpointCoords: Coordinates,
  allowedRadius: number
): boolean => {
  const distance = calculateDistance(userCoords, checkpointCoords);
  return distance <= allowedRadius;
};

/**
 * Format distance for display
 * @param meters Distance in meters
 * @returns Formatted string
 */
export const formatDistance = (meters: number): string => {
  if (meters < 1000) {
    return `${meters}m`;
  }
  return `${(meters / 1000).toFixed(2)}km`;
};
