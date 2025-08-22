// 컴패션랩 타이포그래피 시스템
export const typography = {
  // 제목 스타일
  h1: {
    className: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
    mobile: 'text-3xl font-bold leading-tight',
    tablet: 'text-4xl font-bold leading-tight',
    desktop: 'text-5xl font-bold leading-tight',
  },

  h2: {
    className: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
    mobile: 'text-2xl font-bold leading-tight',
    tablet: 'text-3xl font-bold leading-tight',
    desktop: 'text-4xl font-bold leading-tight',
  },

  h3: {
    className: 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight',
    mobile: 'text-xl font-semibold leading-tight',
    tablet: 'text-2xl font-semibold leading-tight',
    desktop: 'text-3xl font-semibold leading-tight',
  },

  h4: {
    className: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-tight',
    mobile: 'text-lg font-semibold leading-tight',
    tablet: 'text-xl font-semibold leading-tight',
    desktop: 'text-2xl font-semibold leading-tight',
  },

  h5: {
    className: 'text-lg md:text-xl lg:text-2xl font-medium leading-tight',
    mobile: 'text-base font-medium leading-tight',
    tablet: 'text-lg font-medium leading-tight',
    desktop: 'text-xl font-medium leading-tight',
  },

  h6: {
    className: 'text-base md:text-lg lg:text-xl font-medium leading-tight',
    mobile: 'text-sm font-medium leading-tight',
    tablet: 'text-base font-medium leading-tight',
    desktop: 'text-lg font-medium leading-tight',
  },

  // 본문 텍스트 스타일
  body: {
    large: 'text-lg md:text-xl leading-relaxed',
    medium: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm md:text-base leading-relaxed',
    xs: 'text-xs md:text-sm leading-relaxed',
  },

  // 특별한 텍스트 스타일
  hero: {
    title: 'text-5xl md:text-7xl font-bold leading-tight',
    subtitle: 'text-xl md:text-2xl font-medium leading-relaxed',
  },

  // 버튼 텍스트
  button: {
    large: 'text-lg font-semibold',
    medium: 'text-base font-semibold',
    small: 'text-sm font-semibold',
  },

  // 카드 및 섹션 제목
  card: {
    title: 'text-xl font-semibold leading-tight',
    subtitle: 'text-base font-medium leading-relaxed',
  },

  // 네비게이션
  nav: {
    desktop: 'text-sm font-medium',
    mobile: 'text-base font-medium',
  },

  // 푸터
  footer: {
    title: 'text-lg font-semibold',
    link: 'text-sm font-medium',
    copyright: 'text-xs',
  },
};

// 텍스트 색상 클래스
export const textColors = {
  primary: 'text-gray-900',
  secondary: 'text-gray-700',
  tertiary: 'text-gray-600',
  light: 'text-gray-400',
  white: 'text-white',
  brand: 'text-blue-600',
  accent: 'text-purple-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  error: 'text-red-600',
};

// 텍스트 정렬
export const textAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

// 텍스트 변환
export const textTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  normal: 'normal-case',
};
