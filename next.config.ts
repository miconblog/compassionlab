import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Vercel 배포 최적화
  output: 'standalone',

  // 이미지 최적화
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // 압축 활성화
  compress: true,

  // 성능 최적화
  experimental: {
    optimizeCss: true,
  },

  // 환경 변수 검증
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
