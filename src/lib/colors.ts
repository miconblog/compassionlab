// 컴패션랩 브랜드 색상 팔레트 - 따뜻한 자연 색감
export const colors = {
  // 메인 브랜드 색상 - 따뜻한 베이지 계열
  primary: {
    50: '#fdf8f3',
    100: '#faf1e8',
    200: '#f4e4d1',
    300: '#e8d0b3',
    400: '#d9b88a',
    500: '#c4a06b', // 메인 브랜드 컬러
    600: '#b08c5a',
    700: '#8f6f47',
    800: '#73593a',
    900: '#5d4730',
  },

  // 보조 색상 - 따뜻한 크림 계열
  secondary: {
    50: '#fefcf8',
    100: '#fdf8f0',
    200: '#faf0d8',
    300: '#f5e4b8',
    400: '#eed494',
    500: '#e4c06b', // 보조 브랜드 컬러
    600: '#d4a94a',
    700: '#b08a3a',
    800: '#8e6f30',
    900: '#735a28',
  },

  // 강조 색상 - 따뜻한 브라운 계열 (자연, 성장)
  accent: {
    50: '#fdf6f0',
    100: '#fae8d8',
    200: '#f4d4b8',
    300: '#ecb88a',
    400: '#e0965a',
    500: '#d17a3a', // 강조 컬러
    600: '#b85f2e',
    700: '#964a26',
    800: '#7a3c22',
    900: '#63321e',
  },

  // 중성 색상
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  // 상태 색상
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

// 그라데이션 정의 - 따뜻한 자연 색감
export const gradients = {
  primary: 'from-amber-400 to-orange-500',
  secondary: 'from-yellow-400 to-amber-500',
  accent: 'from-orange-400 to-red-500',
  warm: 'from-amber-300 to-orange-400',
  cool: 'from-amber-500 to-orange-600',
};

// 컴패션랩 테마 색상 - 따뜻한 자연 색감
export const theme = {
  // 배경 색상
  background: {
    primary: '#ffffff',
    secondary: '#fefcf8',
    tertiary: '#fdf8f0',
    dark: '#2d1b0e',
  },

  // 텍스트 색상
  text: {
    primary: '#2d1b0e',
    secondary: '#5d4730',
    tertiary: '#8f6f47',
    light: '#fefcf8',
    dark: '#1a0f07',
  },

  // 버튼 색상
  button: {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    accent: colors.accent[500],
    outline: 'transparent',
  },
};
