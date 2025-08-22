// 컴패션랩 브랜드 색상 팔레트 - 부드러운 자연 색감
export const colors = {
  // 메인 브랜드 색상 - 부드러운 베이지 계열
  primary: {
    50: '#fdfbf7',
    100: '#faf7f0',
    200: '#f4ede0',
    300: '#e8dcc5',
    400: '#d4c49a',
    500: '#b8a67a', // 메인 브랜드 컬러
    600: '#a08f66',
    700: '#7f7252',
    800: '#665b42',
    900: '#524a35',
  },

  // 보조 색상 - 부드러운 크림 계열
  secondary: {
    50: '#fefefc',
    100: '#fdfcf8',
    200: '#faf8f0',
    300: '#f5f0e0',
    400: '#ede4c8',
    500: '#e0d2a8', // 보조 브랜드 컬러
    600: '#c8b88a',
    700: '#a3956f',
    800: '#84785a',
    900: '#6a6148',
  },

  // 강조 색상 - 부드러운 세이지 계열 (자연, 평온)
  accent: {
    50: '#f4f7f6',
    100: '#e6edeb',
    200: '#d1ddd8',
    300: '#b3c5bd',
    400: '#8ba696',
    500: '#6b8a7a', // 강조 컬러
    600: '#5a7264',
    700: '#4a5d52',
    800: '#3d4c43',
    900: '#333e37',
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

// 그라데이션 정의 - 부드러운 자연 색감
export const gradients = {
  primary: 'from-amber-300 to-orange-400',
  secondary: 'from-yellow-300 to-amber-400',
  accent: 'from-emerald-400 to-teal-500',
  warm: 'from-amber-200 to-orange-300',
  cool: 'from-emerald-300 to-teal-400',
};

// 컴패션랩 테마 색상 - 부드러운 자연 색감
export const theme = {
  // 배경 색상
  background: {
    primary: '#ffffff',
    secondary: '#fefefc',
    tertiary: '#fdfcf8',
    dark: '#2d1b0e',
  },

  // 텍스트 색상
  text: {
    primary: '#2d1b0e',
    secondary: '#524a35',
    tertiary: '#7f7252',
    light: '#fefefc',
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
