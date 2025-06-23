import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '컨패션랩 - 사회정서윤리학습을 통한 미래 교육',
  description:
    'SEE Learning® 기반의 한국형 사회정서윤리학습 프로그램. 공감의 과학, 인식의 함양, 참여의 도구를 통해 미래 교육의 새로운 패러다임을 제시합니다.',
  keywords:
    '사회정서윤리학습, SEE Learning, 공감교육, 정서지능, 한국교육, 미래교육',
  authors: [{ name: '컨패션랩' }],
  openGraph: {
    title: '컨패션랩 - 사회정서윤리학습을 통한 미래 교육',
    description: 'SEE Learning® 기반의 한국형 사회정서윤리학습 프로그램',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
