import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '컴패션랩 - 자기 자비를 통한 자기 돌봄의 교육',
  description:
    '강릉시 소재 교육 전문 회사. SEE Learning®과 NVC 모델을 응용하여 요가와 명상을 접목한 몸과 마음이 모두 건강한 성장을 돕는 교육을 제공합니다.',
  keywords: '컴패션랩, 강릉교육, SEE Learning, NVC, 비폭력대화, 요가, 명상, 사회정서교육, 자기돌봄',
  openGraph: {
    title: '컴패션랩 - 자기 자비를 통한 자기 돌봄의 교육',
    description: '강릉시 소재 교육 전문 회사. SEE Learning®과 NVC 모델을 응용한 교육',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '컴패션랩 - 자기 자비를 통한 자기 돌봄의 교육',
    description: '강릉시 소재 교육 전문 회사. SEE Learning®과 NVC 모델을 응용한 교육',
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: '컴패션랩',
    description:
      '강릉시 소재 교육 전문 회사. SEE Learning®과 NVC 모델을 응용하여 요가와 명상을 접목한 몸과 마음이 모두 건강한 성장을 돕는 교육을 제공합니다.',
    url: 'https://compassionlab.kr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '강릉시',
      addressRegion: '강원도',
      addressCountry: 'KR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'KR',
    },
    sameAs: ['https://www.facebook.com/compassionlab', 'https://www.instagram.com/compassionlab'],
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#fdf7eb' }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-700">컴패션랩</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            자기연민(Self-Compassion)을 통해 자기 돌봄을 실천하고
            <br />
            서로를 도우며 건강하게 관계 맺는 사회
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" style={{ backgroundColor: '#fff5ef' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">비전</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                자기 연민과 자기 돌봄을 통해 몸과 마음 모두 건강한 개인
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">소통하고 성장하는 따뜻한 가정</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                가정과 학교가 함께 하는 사회, 정서, 인성 교육
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">성인 및 지역 사회를 위한 교육</h3>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              사회, 정서, 인성 교육을 전문으로 하는 강사들이 강릉에서 함께 하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20" style={{ backgroundColor: '#fdf7eb' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">프로그램</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">키즈 요가</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span>아이들 눈높이에 맞춰 재미있는 요가 수업을 진행합니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span>씨러닝을 활용한 정서 교육을 함께 합니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span>장소 상황에 따라 놀이체육으로 대체하여 수업할 수 있습니다.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">마음 놀이터</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span>씨러닝, NVC, 스마일 키퍼스를 활용한 사회, 정서, 인성 교육에 맞춘 수업입니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span>게임, 놀이, 미술 활동을 연계하여 학생들의 흥미를 이끕니다.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 교육 현장 이미지들 */}
          <div className="grid md:grid-cols-5 gap-4 mb-16">
            {[
              { src: '/images/1_class_activity_1.jpeg', alt: '교육 활동 1' },
              { src: '/images/2_class_activity_2.jpeg', alt: '교육 활동 2' },
              { src: '/images/3_class_arts.jpeg', alt: '미술 활동' },
              { src: '/images/4_class_activity_3.JPG', alt: '교육 활동 3' },
              { src: '/images/5_class_activity_4.JPG', alt: '교육 활동 4' },
            ].map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* SEE Learning 설명 */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex items-start gap-6">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image src="/images/see_learning_logo.webp" alt="SEE Learning 로고" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">SEE Learning®</h3>
                <p className="text-slate-600">
                  SEE는 Social, Emotional, Ethical의 약자로, 미국 최상위권 대학인 에모리 대학에서 대니얼 골먼 등
                  권위있는 전문가들과 함께 개발한 사회, 정서, 인성 교육 프로그램입니다.
                </p>
              </div>
            </div>
          </div>

          {/* NVC 설명 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-start gap-6">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image src="/images/nvc_logo.png" alt="NVC 로고" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">NVC & 스마일 키퍼스</h3>
                <p className="text-slate-600">
                  NVC는 비폭력대화의 약자로 서로의 마음을 존중하며 진심으로 연결되는 대화 방식을 배우는 교육입니다.
                  스마일 키퍼스는 NVC의 철학을 바탕으로 만든 공감, 소통 중심의 인성교육 프로그램입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Effects Section */}
      <section className="py-20" style={{ backgroundColor: '#fff5ef' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">프로그램을 통한 기대효과</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-slate-600">요가와 놀이체육 활동으로 튼튼한 몸을 기릅니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-slate-600">감정조절 및 회복 탄력 기술을 배워 마음도 건강해집니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-slate-600">주의 집중력 훈련을 통해 학업 성취도 및 자기 주도 학습에 기여합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-slate-600">공감과 소통을 배워 학교 폭력을 예방합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-20" style={{ backgroundColor: '#fdf7eb' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">컴패션랩 향후 사업 계획</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">전문강사 양성 수업 개설</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                해외에 있는 학교와 연계하여 방학 중 해외 연수 및 해외 강사 초청 프로그램 운영
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: '#fff5ef' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">문의 및 신청</h2>
            <p className="text-xl text-slate-600">
              강릉 지역의 특성에 맞는 맞춤형 프로그램으로 몸과 마음이 모두 건강한 성장을 경험해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">전화 문의</h3>
              <p className="text-gray-600 mb-2">평일 10:00 - 17:00</p>
              <p className="text-2xl font-bold text-slate-600">010-3500-0438</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">이메일 문의</h3>
              <p className="text-gray-600 mb-2">24시간 접수 가능</p>
              <p className="text-lg font-semibold text-gray-600">mnlbluese@gmail.com</p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">위치</h3>
              <p className="text-gray-600 mb-2">강원특별자치도 강릉시</p>
              <p className="text-sm text-slate-600">사천면 산대월길 113-17</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">컴패션랩</h3>
              <p className="text-gray-400">
                자기연민(Self-Compassion)을 통해 자기 돌봄을 실천하고 서로를 도우며 건강하게 관계 맺는 사회
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">프로그램</h4>
              <ul className="space-y-2 text-gray-400">
                <li>키즈 요가</li>
                <li>마음 놀이터</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">교육 프로그램</h4>
              <ul className="space-y-2 text-gray-400">
                <li>SEE Learning®</li>
                <li>NVC(비폭력대화)</li>
                <li>스마일 키퍼스</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400">
                <li>전화: 010-3500-0438</li>
                <li>이메일: mnlbluese@gmail.com</li>
                <li>주소: 강원특별자치도 강릉시 사천면 산대월길 113-17</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 컴패션랩. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
