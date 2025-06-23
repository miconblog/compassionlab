export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>
        <div className='relative z-10 text-center px-4 max-w-6xl mx-auto'>
          <h1 className='text-5xl md:text-7xl font-bold text-gray-900 mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
              컨패션랩
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto'>
            사회정서윤리학습을 통한 미래 교육의 새로운 패러다임
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300'>
              프로그램 시작하기
            </button>
            <button className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300'>
              자세히 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              SEE Learning® 기반의 한국형 교육
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              에모리 대학교에서 개발된 SEE Learning®을 한국의 교육 환경에 맞게
              현지화하여 제공하는 사회정서윤리학습 프로그램입니다.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6 rounded-lg bg-blue-50'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                공감의 과학
              </h3>
              <p className='text-gray-600'>
                과학적 근거에 기반한 공감 능력 개발과 사회적 연결성 증진을 위한
                체계적인 교육
              </p>
            </div>

            <div className='text-center p-6 rounded-lg bg-purple-50'>
              <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                인식의 함양
              </h3>
              <p className='text-gray-600'>
                자기 인식과 타인에 대한 이해를 바탕으로 한 정서적 지능과 사회적
                기술의 발달
              </p>
            </div>

            <div className='text-center p-6 rounded-lg bg-green-50'>
              <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                참여의 도구
              </h3>
              <p className='text-gray-600'>
                실제 상황에서 적용할 수 있는 구체적인 도구와 방법론을 통한
                실천적 학습
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Results */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-8'>연구 결과에 따르면</h2>
          <p className='text-xl mb-12'>
            컨패션랩 프로그램은 다음과 같은 효과를 보여줍니다
          </p>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-8'>
              <div className='text-4xl font-bold text-yellow-300 mb-2'>
                +47%
              </div>
              <h3 className='text-xl font-semibold mb-2'>
                타인에 대한 공감 능력
              </h3>
              <p className='text-blue-100'>
                다른 사람의 감정과 관점을 이해하고 공감하는 능력이 크게
                향상됩니다
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-8'>
              <div className='text-4xl font-bold text-yellow-300 mb-2'>
                +52%
              </div>
              <h3 className='text-xl font-semibold mb-2'>관점 수용 능력</h3>
              <p className='text-blue-100'>
                다양한 관점을 이해하고 수용하는 능력이 현저히 개선됩니다
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-8'>
              <div className='text-4xl font-bold text-yellow-300 mb-2'>
                +38%
              </div>
              <h3 className='text-xl font-semibold mb-2'>학업 자기효능감</h3>
              <p className='text-blue-100'>
                학습에 대한 자신감과 자기 효능감이 향상됩니다
              </p>
            </div>
          </div>

          <div className='mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg'>
            <p className='text-lg'>
              <strong>CASEL(사회정서학습협력기구)</strong>에서 2003년부터
              검토해온 증거 기반 SEL 프로그램 중 컨패션랩은 최고 수준의 고품질
              SEL 프로그램으로 인정받았습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              글로벌 컨패션랩 네트워크
            </h2>
            <p className='text-xl text-gray-600'>
              전 세계 41개국 이상에서 컨패션랩 프로그램을 활용하고 있습니다
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 text-center'>
            <div className='p-6'>
              <div className='text-5xl font-bold text-blue-600 mb-2'>41+</div>
              <p className='text-xl text-gray-700'>컨패션랩을 활용하는 국가</p>
            </div>

            <div className='p-6'>
              <div className='text-5xl font-bold text-purple-600 mb-2'>
                500+
              </div>
              <p className='text-xl text-gray-700'>공인된 파실리테이터</p>
            </div>

            <div className='p-6'>
              <div className='text-5xl font-bold text-green-600 mb-2'>
                1000+
              </div>
              <p className='text-xl text-gray-700'>국제 협력 기관</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              5단계로 시작하기
            </h2>
            <p className='text-xl text-gray-600'>
              컨패션랩 프로그램을 시작하는 간단한 단계들
            </p>
          </div>

          <div className='grid md:grid-cols-5 gap-6'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                1
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                컨패션랩 101 교육
              </h3>
              <p className='text-gray-600'>기초 교육 과정을 수강하세요</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                2
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                커리큘럼 다운로드
              </h3>
              <p className='text-gray-600'>교육 자료를 다운로드하세요</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                3
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                가까운 협력기관 연결
              </h3>
              <p className='text-gray-600'>지역 협력기관과 연락하세요</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                4
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                교육 및 이벤트 등록
              </h3>
              <p className='text-gray-600'>향후 교육 일정에 등록하세요</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                5
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                디지털 학습 플랫폼 참여
              </h3>
              <p className='text-gray-600'>온라인 학습 커뮤니티에 참여하세요</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              참여자들의 이야기
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-blue-50 p-8 rounded-lg'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4'>
                  D
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>다니엘 골먼</h4>
                  <p className='text-gray-600'>감정지능의 저자</p>
                </div>
              </div>
              <p className='text-gray-700 italic'>
                &ldquo;컨패션랩과 같은 프로그램들이 널리 채택되어, 더 많은
                학생들이 인류 역사상 전례 없는 도전들을 다루며 성장하는 데
                도움이 되기를 바랍니다.&rdquo;
              </p>
            </div>

            <div className='bg-purple-50 p-8 rounded-lg'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4'>
                  학
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>학생</h4>
                  <p className='text-gray-600'>컨패션랩 참여자</p>
                </div>
              </div>
              <p className='text-gray-700 italic'>
                &ldquo;배운 것들을 통해 감정을 조절하고, 긍정적인 감정을
                만들어내며, 나 자신과 다른 사람들에 대한 공감을 통해 이를 관리할
                수 있게 되었습니다.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            사회정서윤리학습의 시대가 왔습니다
          </h2>
          <p className='text-xl mb-8 text-blue-100'>
            컨패션랩과 함께 미래 교육의 새로운 패러다임을 시작하세요
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300'>
              지금 시작하기
            </button>
            <button className='border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300'>
              문의하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-2xl font-bold mb-4'>컨패션랩</h3>
              <p className='text-gray-400'>
                사회정서윤리학습을 통한 미래 교육의 새로운 패러다임
              </p>
            </div>

            <div>
              <h4 className='text-lg font-semibold mb-4'>프로그램</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>기초 교육</li>
                <li>심화 과정</li>
                <li>교사 연수</li>
                <li>커리큘럼</li>
              </ul>
            </div>

            <div>
              <h4 className='text-lg font-semibold mb-4'>지원</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>자주 묻는 질문</li>
                <li>문의하기</li>
                <li>기술 지원</li>
                <li>커뮤니티</li>
              </ul>
            </div>

            <div>
              <h4 className='text-lg font-semibold mb-4'>연결</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>뉴스레터 구독</li>
                <li>소셜 미디어</li>
                <li>블로그</li>
                <li>이벤트</li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
            <p>&copy; 2024 컨패션랩. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
