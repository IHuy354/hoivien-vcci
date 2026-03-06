/**
 * Get default redirect path based on user role
 */
export function getDefaultRouteByRole(roleCode: string | null): string {
  if (roleCode === 'SCHOOL') {
    return '/school';
  }
  
  // Default route for INTERN, STUDENT, ADMIN, and others
  return '/dashboard';
}
