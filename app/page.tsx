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
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-700">컴패션랩</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            자기 자비(Self-Compassion)를 통해 자기 돌봄을 실천하고
            <br />
            서로를 도우며 건강하게 관계 맺는 사회
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" style={{ backgroundColor: '#fff5ef' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">교육 전문 회사</h2>
          </div>

          {/* 로고 섹션 */}
          <div className="flex justify-center items-center gap-12 mb-16">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg">
                <div className="text-center text-white">
                  <div className="text-xl font-bold mb-1">EMORY</div>
                  <div className="text-xs font-medium">UNIVERSITY</div>
                  <div className="text-xs mt-1 opacity-90">Center for Contemplative Science</div>
                  <div className="text-xs opacity-90">& Compassion-Based Ethics</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">SEE Learning® 개발기관</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-1">NVC</div>
                  <div className="text-xs font-medium">비폭력대화</div>
                  <div className="text-xs font-medium">Nonviolent</div>
                  <div className="text-xs font-medium">Communication</div>
                  <div className="text-xs mt-1 opacity-90">한국NVC센터</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">마셜 로젠버그 개발</p>
            </div>
          </div>

          {/* 설명 섹션 */}
          <div className="text-center">
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              컴패션랩은 에모리 대학교에서 개발한 SEE Learning®과 비폭력대화(NVC) 모델을 요가, 명상 교육과 접목하여
              몸과 마음 모두의 성장을 돕습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20" style={{ backgroundColor: '#fdf7eb' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-700 mb-4">우리의 교육 현장</h2>
            <p className="text-lg text-slate-600">강릉 현장에서의 실제 교육 활동 모습</p>
          </div>

          {/* 교육 현장 이미지들 */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: '/images/소개 이미지 3.jpeg',
                alt: '컴패션랩 교육 활동 1',
                title: 'SEE Learning® 수업 현장',
                description: '에모리 대학교에서 개발한 SEE Learning® 프로그램을 통한 사회정서교육',
              },
              {
                src: '/images/소개 이미지 2.jpeg',
                alt: '컴패션랩 교육 활동 2',
                title: '요가와 명상 교육',
                description: '몸과 마음의 균형을 찾는 요가와 명상 활동',
              },
              {
                src: '/images/소개 이미지 3.jpeg',
                alt: '컴패션랩 교육 활동 3',
                title: 'NVC 소통 훈련',
                description: '비폭력대화를 통한 효과적인 소통과 갈등 해결',
              },
            ].map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{image.title}</h3>
                  <p className="text-sm text-slate-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20" style={{ backgroundColor: '#fdf7eb' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">프로그램</h2>
            <p className="text-xl text-slate-600">
              유아부터 성인까지 각 대상별 맞춤형 프로그램으로 몸과 마음이 모두 건강한 성장을 돕습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '유아 프로그램',
                age: '3-6세',
                description: '자연스러운 놀이를 통해 자기 인식과 공감 능력을 기르는 프로그램',
                features: [
                  '놀이 중심의 자기 인식 활동',
                  '감정 표현과 이해하기',
                  '친구와의 관계 맺기',
                  '요가와 명상 기초 체험',
                ],
                duration: '주 2회, 30분씩',
                color: 'blue',
              },
              {
                title: '초등학생 프로그램',
                age: '7-12세',
                description: 'SEE Learning® 기반의 체계적인 사회정서교육으로 건강한 성장을 돕는 프로그램',
                features: [
                  'SEE Learning® 기초 커리큘럼',
                  '자기 돌봄과 자기 자비 실천',
                  '갈등 해결과 소통 기술',
                  '요가와 명상 정기 활동',
                ],
                duration: '주 3회, 45분씩',
                color: 'purple',
              },
              {
                title: '중학생 프로그램',
                age: '13-15세',
                description: '사춘기 시기의 정서적 안정과 사회적 기술 발달을 위한 맞춤형 프로그램',
                features: [
                  'SEE Learning® 심화 과정',
                  '스트레스 관리와 정서 조절',
                  '또래 관계와 갈등 해결',
                  '자기 효능감과 동기 부여',
                ],
                duration: '주 2회, 60분씩',
                color: 'green',
              },
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 mb-4">
                  {program.age}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-4">{program.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">주요 특징</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <span className="text-slate-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600 mb-3">
                    <strong>수업 시간:</strong> {program.duration}
                  </p>
                </div>
              </div>
            ))}
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
              <p className="text-gray-600 mb-2">평일 09:00 - 18:00</p>
              <p className="text-2xl font-bold text-slate-600">033-123-4567</p>
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
              <p className="text-lg font-semibold text-gray-600">info@compassionlab.kr</p>
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
              <p className="text-gray-600 mb-2">강릉시 교육센터</p>
              <p className="text-sm text-slate-600">강릉시 중앙로 123번길 45</p>
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
                강릉시 소재 교육 전문 회사
                <br />
                자기 자비를 통해 자기 돌봄을 실천하고 서로를 도우며 건강하게 관계 맺는 사회
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">프로그램</h4>
              <ul className="space-y-2 text-gray-400">
                <li>유아 프로그램</li>
                <li>초등학생 프로그램</li>
                <li>중학생 프로그램</li>
                <li>고등학생 프로그램</li>
                <li>성인 프로그램</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">교육 철학</h4>
              <ul className="space-y-2 text-gray-400">
                <li>SEE Learning®</li>
                <li>NVC(비폭력대화)</li>
                <li>요가와 명상</li>
                <li>강릉 현장 경험</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400">
                <li>강릉시 소재</li>
                <li>늘봄학교 활동</li>
                <li>써클활동</li>
                <li>문의 및 신청</li>
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
