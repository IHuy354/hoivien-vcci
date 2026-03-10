export const PAGE_SIZE = 10;
export const CURRENT_YEAR = new Date().getFullYear();
export const YEAR_OPTIONS: number[] = Array.from({ length: 6 }, (_, i) => CURRENT_YEAR - i);

export const SPEAKER_TYPES = [
  { value: 'speaker', label: 'Diễn Giả' },
  { value: 'instructor', label: 'Cán Bộ Giảng Viên' },
  { value: 'advisor', label: 'Ban Cố Vấn' },
  { value: 'director', label: 'Ban Chủ Nhiệm' },
];