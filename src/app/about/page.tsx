import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개 - 컴패션랩',
  description:
    '강릉시 소재 교육 전문 회사 컴패션랩의 소개. SEE Learning® 전문가들과 현장 경험을 바탕으로 한 맞춤형 교육 프로그램을 제공합니다.',
  keywords: '컴패션랩 소개, 강릉교육, SEE Learning 전문가, 교육 프로그램, 현장 경험',
  openGraph: {
    title: '소개 - 컴패션랩',
    description: '강릉시 소재 교육 전문 회사 컴패션랩의 소개',
    type: 'website',
    locale: 'ko_KR',
  },
};


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">컴패션랩 소개</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            강릉시 소재 교육 전문 회사로, 자기 자비를 통해 자기 돌봄을 실천하고
            <br />
            서로를 도우며 건강하게 관계 맺는 사회를 만들어갑니다.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">우리의 비전</h2>
              <p className="text-lg text-gray-600 mb-6">
                자기 자비와 자기 돌봄을 통해 몸과 마음 모두 건강한 개인 만들기
              </p>
              <p className="text-lg text-gray-600 mb-6">소통하고 성장하는 따뜻한 가정 만들기</p>
              <p className="text-lg text-gray-600 mb-6">가정과 학교가 함께하는 사회, 정서, 인성 교육</p>
              <p className="text-lg text-gray-600 mb-6">성인 및 지역사회를 위한 교육</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">과학적 근거 기반의 교육</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">한국 교육 환경에 최적화</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">글로벌 네트워크와의 협력</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">핵심 가치</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">강릉 현장 경험</h4>
                  <p className="text-gray-600">강릉 소재 학교에서 늘봄학교와 써클활동 강사로 활동</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-600 mb-2">대상별 맞춤형</h4>
                  <p className="text-gray-600">유아부터 성인까지 각 대상별 맞춤형 프로그램 운영</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-600 mb-2">교육 전문성</h4>
                  <p className="text-gray-600">현장의 필요와 학생들의 특성을 깊이 이해하는 전문성</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEE Learning Foundation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEE Learning® 기반</h2>
            <p className="text-xl text-gray-600">에모리 대학교에서 개발된 세계적 수준의 교육 프로그램</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SEE Learning®이란?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Social, Emotional, and Ethical Learning의 약자로, 사회정서윤리학습을 의미합니다. 3세부터 19세까지의
                학생들을 위한 포괄적인 커리큘럼으로, 공감의 과학을 사회정서학습에 접목시킵니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                전 세계 41개국 이상에서 활용되고 있으며, CASEL(사회정서학습협력기구)의 최고 등급 인증을 받은 고품질 SEL
                프로그램입니다.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">개발 기관</h4>
                <p className="text-blue-800">에모리 대학교 명상과학 및 공감기반윤리학 센터 (CCSCBE)</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 특징</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">과학적 근거</h4>
                    <p className="text-gray-600">신경과학과 심리학 연구에 기반</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">연령별 맞춤</h4>
                    <p className="text-gray-600">3세부터 19세까지 발달 단계별 교육</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">문화적 적응성</h4>
                    <p className="text-gray-600">다양한 문화권에 맞게 현지화</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">실천적 도구</h4>
                    <p className="text-gray-600">일상생활에서 적용 가능한 구체적 방법</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Korean Adaptation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">강릉 지역 특성</h2>
            <p className="text-xl text-gray-600">강릉 지역의 교육 환경과 문화에 맞게 최적화된 컴패션랩</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">강릉 지역 교육</h3>
              <p className="text-gray-600">
                강릉 지역의 교육 환경과 학생들의 특성에 맞는 맞춤형 교육 자료와 프로그램을 제공합니다.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">현장 중심 활동</h3>
              <p className="text-gray-600">
                강릉 소재 학교에서 늘봄학교와 써클활동을 통해 현장 중심의 교육 프로그램을 운영합니다.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">지역사회 기여</h3>
              <p className="text-gray-600">
                강릉 지역사회의 교육 발전에 기여하며, 지역의 특성을 반영한 효과적인 학습 환경을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">전문 강사진</h2>
            <p className="text-xl text-gray-600">대표를 포함한 3~4명의 전문 강사들이 강릉 현장에서 활동합니다</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">대표</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">대표 강사</h3>
              <p className="text-gray-600">
                컴패션랩의 대표이자 핵심 강사로, 강릉 지역 교육 현장에서 늘봄학교와 써클활동을 이끌어가고 있습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">전문</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">전문 강사진</h3>
              <p className="text-gray-600">
                3~4명의 전문 강사들이 각자의 전문 분야에서 강릉 소재 학교의 교육 프로그램을 운영하고 있습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">현장</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">현장 경험</h3>
              <p className="text-gray-600">
                강릉 지역 학교에서의 실제 교육 경험을 바탕으로 학생들의 특성과 현장의 필요를 깊이 이해하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">컴패션랩과 함께 시작하세요</h2>
          <p className="text-xl mb-8 text-blue-100">
            자기 자비를 통해 자기 돌봄을 실천하고 서로를 도우며 건강하게 관계 맺는 사회를 만들어갑니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              프로그램 신청하기
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
