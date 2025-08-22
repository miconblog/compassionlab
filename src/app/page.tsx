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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 to-orange-300/30"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              컴패션랩
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto">
            자기 자비(Self-Compassion)를 통해 자기 돌봄을 실천하고
            <br />
            서로를 도우며 건강하게 관계 맺는 사회
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300">
              프로그램 시작하기
            </button>
            <button className="border-2 border-amber-400 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300">
              자세히 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-amber-900 mb-4">강릉시 소재 교육 전문 회사</h2>
              <p className="text-xl text-amber-700 mb-8">
                강릉시에 소재한 컴패션랩은 사회, 정서, 인성 교육을 제공하는 교육 전문 회사입니다.
              </p>
              <h3 className="text-3xl font-bold text-amber-900 mb-4">SEE Learning® 기반의 한국형 교육</h3>
              <p className="text-xl text-amber-700">
                에모리 대학교에서 개발된 SEE Learning®과 비폭력대화(NVC) 모델을 응용하여 요가와 명상을 교육과 접목한
                몸과 마음이 모두 건강한 성장을 돕는 프로그램을 제공합니다.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/소개 이미지 2.jpeg"
                  alt="컴패션랩 교육 현장"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-amber-50">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">강릉 현장 경험</h3>
              <p className="text-amber-600">
                강릉 소재 학교에서 늘봄학교와 써클활동 강사로 활동하며
                <br />
                현장의 필요와 학생들의 특성을 깊이 이해
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-orange-50">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">대상별 맞춤형 프로그램</h3>
              <p className="text-amber-600">
                유아부터 초, 중, 고등학생, 그리고 성인까지
                <br />각 대상별 맞춤형 프로그램 운영
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-emerald-50">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">요가와 명상 접목</h3>
              <p className="text-amber-600">
                신체적 활동인 요가와 명상을 교육과 접목하여
                <br />
                몸과 마음이 모두 건강한 성장을 돕는 교육
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">우리의 교육 현장</h2>
            <p className="text-lg text-amber-600">강릉 현장에서의 실제 교육 활동 모습</p>
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/소개 이미지 3.jpeg" alt="컴패션랩 교육 활동" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Research Results */}
      <section className="py-20 bg-gradient-to-r from-amber-400 to-orange-400 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">교육 철학과 전문성</h2>
          <p className="text-xl mb-12">컴패션랩의 교육 철학과 전문성</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="text-4xl font-bold text-yellow-300 mb-2">SEE Learning®</div>
              <h3 className="text-xl font-semibold mb-2">미국 에모리 대학교 개발</h3>
              <p className="text-blue-100">사회, 정서, 윤리학습 모델을 한국의 교육 환경에 맞게 현지화하여 제공</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="text-4xl font-bold text-yellow-300 mb-2">NVC 모델</div>
              <h3 className="text-xl font-semibold mb-2">비폭력대화</h3>
              <p className="text-blue-100">비폭력대화(NVC) 모델을 응용하여 효과적인 소통과 관계 맺기 교육</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="text-4xl font-bold text-yellow-300 mb-2">요가 & 명상</div>
              <h3 className="text-xl font-semibold mb-2">신체적 활동 접목</h3>
              <p className="text-blue-100">요가와 명상을 교육과 접목하여 몸과 마음이 모두 건강한 성장을 돕는 교육</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <p className="text-lg">
              <strong>대표를 포함한 3~4명의 전문 강사</strong>들이 현재 강릉 소재 학교에서 늘봄학교와 써클활동 강사로
              활동하며 현장의 필요와 학생들의 특성을 깊이 이해하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">향후 계획</h2>
            <p className="text-xl text-amber-600">해외 SEE Learning 학교와의 연계를 통한 글로벌 교육 확장</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-amber-500 mb-2">해외 연계</div>
              <p className="text-xl text-amber-600">해외 SEE Learning 학교와 연계</p>
            </div>

            <div className="p-6">
              <div className="text-5xl font-bold text-orange-500 mb-2">방학 연수</div>
              <p className="text-xl text-amber-600">방학 중 해외 연수 프로그램 운영</p>
            </div>

            <div className="p-6">
              <div className="text-5xl font-bold text-emerald-500 mb-2">교환 학습</div>
              <p className="text-xl text-amber-600">교환 학습 프로그램 운영</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">5단계로 시작하기</h2>
            <p className="text-xl text-amber-600">컴패션랩 프로그램을 시작하는 간단한 단계들</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">컴패션랩 101 교육</h3>
              <p className="text-amber-600">기초 교육 과정을 수강하세요</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">커리큘럼 다운로드</h3>
              <p className="text-amber-600">교육 자료를 다운로드하세요</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">가까운 협력기관 연결</h3>
              <p className="text-amber-600">지역 협력기관과 연락하세요</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">교육 및 이벤트 등록</h3>
              <p className="text-amber-600">향후 교육 일정에 등록하세요</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">디지털 학습 플랫폼 참여</h3>
              <p className="text-amber-600">온라인 학습 커뮤니티에 참여하세요</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">참여자들의 이야기</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  D
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">다니엘 골먼</h4>
                  <p className="text-amber-600">감정지능의 저자</p>
                </div>
              </div>
              <p className="text-amber-700 italic">
                &ldquo;컴패션랩과 같은 프로그램들이 널리 채택되어, 더 많은 학생들이 인류 역사상 전례 없는 도전들을
                다루며 성장하는 데 도움이 되기를 바랍니다.&rdquo;
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  학
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">학생</h4>
                  <p className="text-amber-600">컴패션랩 참여자</p>
                </div>
              </div>
              <p className="text-amber-700 italic">
                &ldquo;배운 것들을 통해 감정을 조절하고, 긍정적인 감정을 만들어내며, 나 자신과 다른 사람들에 대한 공감을
                통해 이를 관리할 수 있게 되었습니다.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-400 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">사회정서윤리학습의 시대가 왔습니다</h2>
          <p className="text-xl mb-8 text-amber-100">컴패션랩과 함께 미래 교육의 새로운 패러다임을 시작하세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              지금 시작하기
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">
              문의하기
            </button>
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
