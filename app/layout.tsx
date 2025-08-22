import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navigation from '@/components/Navigation';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '컴패션랩 - 자기 자비를 통한 자기 돌봄의 교육',
  description:
    '강릉시 소재 교육 전문 회사. SEE Learning®과 NVC 모델을 응용하여 요가와 명상을 접목한 몸과 마음이 모두 건강한 성장을 돕는 교육을 제공합니다.',
  keywords: '컴패션랩, 강릉교육, SEE Learning, NVC, 비폭력대화, 요가, 명상, 사회정서교육, 자기돌봄',
  authors: [{ name: '컴패션랩' }],
  openGraph: {
    title: '컴패션랩 - 자기 자비를 통한 자기 돌봄의 교육',
    description: '강릉시 소재 교육 전문 회사. SEE Learning®과 NVC 모델을 응용한 교육',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
