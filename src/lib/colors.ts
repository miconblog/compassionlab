// 컴패션랩 브랜드 색상 팔레트
export const colors = {
  // 메인 브랜드 색상 - 따뜻한 블루 계열
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // 메인 브랜드 컬러
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // 보조 색상 - 따뜻한 퍼플 계열
  secondary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7', // 보조 브랜드 컬러
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },

  // 강조 색상 - 따뜻한 그린 계열 (자연, 성장)
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // 강조 컬러
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
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

// 그라데이션 정의
export const gradients = {
  primary: 'from-blue-500 to-purple-600',
  secondary: 'from-purple-500 to-pink-600',
  accent: 'from-green-400 to-blue-500',
  warm: 'from-orange-400 to-red-500',
  cool: 'from-blue-400 to-cyan-500',
};

// 컴패션랩 테마 색상
export const theme = {
  // 배경 색상
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    dark: '#0f172a',
  },

  // 텍스트 색상
  text: {
    primary: '#1e293b',
    secondary: '#475569',
    tertiary: '#64748b',
    light: '#f8fafc',
    dark: '#0f172a',
  },

  // 버튼 색상
  button: {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    accent: colors.accent[500],
    outline: 'transparent',
  },
};
