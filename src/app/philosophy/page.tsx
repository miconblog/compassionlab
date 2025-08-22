import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Section, { SectionHeader } from '@/components/ui/Section';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '교육 철학 - 컴패션랩',
  description:
    'SEE Learning®과 NVC 모델을 기반으로 한 컴패션랩의 교육 철학. 몸과 마음의 통합적 성장을 위한 과학적 접근법을 소개합니다.',
  keywords:
    '교육 철학, SEE Learning, NVC 모델, 비폭력대화, 요가 명상, 통합적 성장, 과학적 교육',
  openGraph: {
    title: '교육 철학 - 컴패션랩',
    description: 'SEE Learning®과 NVC 모델 기반 교육 철학',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function PhilosophyPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-6'>교육 철학</h1>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
            SEE Learning®, NVC, 요가와 명상을 통한
            <br />
            몸과 마음의 통합적 성장 접근법
          </p>
        </div>
      </section>

      {/* 교육 철학 개요 */}
      <Section background='white'>
        <SectionHeader
          title='컴패션랩의 교육 철학'
          subtitle='과학적 근거에 기반한 통합적 교육 접근법으로 몸과 마음이 모두 건강한 성장을 돕습니다'
        />

        <div className='grid md:grid-cols-3 gap-8'>
          <Card className='text-center'>
            <CardContent className='p-6'>
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
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                과학적 근거
              </h3>
              <p className='text-gray-600'>
                신경과학과 심리학 연구에 기반한 검증된 교육 방법론을 적용합니다
              </p>
            </CardContent>
          </Card>

          <Card className='text-center'>
            <CardContent className='p-6'>
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
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                통합적 접근
              </h3>
              <p className='text-gray-600'>
                지적, 정서적, 신체적 영역을 통합하여 전인적 성장을 돕습니다
              </p>
            </CardContent>
          </Card>

          <Card className='text-center'>
            <CardContent className='p-6'>
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
                실천적 도구
              </h3>
              <p className='text-gray-600'>
                일상생활에서 바로 적용할 수 있는 구체적인 도구와 방법을
                제공합니다
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* SEE Learning 모델 상세 설명 */}
      <Section background='gray'>
        <SectionHeader
          title='SEE Learning® 모델'
          subtitle='미국 에모리 대학교에서 개발된 혁신적인 사회정서윤리학습 프로그램'
        />

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h3 className='text-3xl font-bold text-gray-900 mb-6'>
              SEE Learning®이란?
            </h3>
            <p className='text-lg text-gray-600 mb-6'>
              <strong>Social, Emotional, and Ethical Learning</strong>의 약자로,
              사회정서윤리학습을 의미합니다. 공감의 과학을 사회정서학습에
              접목시킨 혁신적인 교육 모델입니다.
            </p>
            <p className='text-lg text-gray-600 mb-6'>
              에모리 대학교 명상과학 및 공감기반윤리학 센터(CCSCBE)에서
              개발되었으며, 전 세계 41개국 이상에서 활용되고 있습니다.
            </p>
            <div className='bg-blue-50 p-6 rounded-lg mb-6'>
              <h4 className='font-semibold text-blue-900 mb-3'>핵심 특징</h4>
              <ul className='text-blue-800 space-y-2'>
                <li>• 3세부터 19세까지 발달 단계별 맞춤형 교육</li>
                <li>• 신경과학과 심리학 연구에 기반한 과학적 근거</li>
                <li>• 다양한 문화권에 맞게 현지화 가능</li>
                <li>• CASEL 최고 등급 인증 프로그램</li>
              </ul>
            </div>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              SEE Learning® 구성 요소
            </h3>
            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-sm'>1</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    공감의 과학
                  </h4>
                  <p className='text-gray-600'>
                    신경과학적 근거에 기반한 공감 능력 개발과 사회적 연결성 증진
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-sm'>2</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    자기 인식
                  </h4>
                  <p className='text-gray-600'>
                    정서적 자각과 자기 조절 능력을 통한 건강한 정서 발달
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-sm'>3</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    사회적 연결성
                  </h4>
                  <p className='text-gray-600'>
                    타인과의 건강한 관계 형성과 사회적 기술 발달
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-sm'>4</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    윤리적 의사결정
                  </h4>
                  <p className='text-gray-600'>
                    도덕적 추론과 윤리적 판단 능력을 통한 올바른 선택
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* NVC 모델과의 결합 방식 */}
      <Section background='white'>
        <SectionHeader
          title='NVC(비폭력대화) 모델'
          subtitle='마셜 로젠버그 박사가 개발한 효과적인 소통과 갈등 해결 방법론'
        />

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              NVC 4단계 프로세스
            </h3>
            <div className='space-y-6'>
              <div className='border-l-4 border-blue-600 pl-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  1. 관찰하기 (Observation)
                </h4>
                <p className='text-gray-600'>
                  판단이나 평가 없이 사실을 있는 그대로 관찰하고 표현합니다.
                </p>
              </div>

              <div className='border-l-4 border-purple-600 pl-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  2. 감정 인식하기 (Feeling)
                </h4>
                <p className='text-gray-600'>
                  자신의 감정을 인식하고 표현하여 정서적 자각을 높입니다.
                </p>
              </div>

              <div className='border-l-4 border-green-600 pl-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  3. 욕구 파악하기 (Need)
                </h4>
                <p className='text-gray-600'>
                  감정의 근본 원인이 되는 욕구를 파악하고 이해합니다.
                </p>
              </div>

              <div className='border-l-4 border-orange-600 pl-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  4. 요청하기 (Request)
                </h4>
                <p className='text-gray-600'>
                  구체적이고 실현 가능한 요청을 통해 해결책을 모색합니다.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-3xl font-bold text-gray-900 mb-6'>
              NVC의 교육적 가치
            </h3>
            <p className='text-lg text-gray-600 mb-6'>
              비폭력대화는 단순한 소통 기법을 넘어서{' '}
              <strong>평화로운 관계</strong>와<strong>갈등 해결</strong>을 위한
              철학적 접근법입니다.
            </p>
            <p className='text-lg text-gray-600 mb-6'>
              컴패션랩에서는 NVC를 교육에 접목하여 학생들이 효과적인 소통과 갈등
              해결 능력을 기를 수 있도록 돕습니다.
            </p>

            <div className='grid md:grid-cols-2 gap-4'>
              <div className='bg-purple-50 p-4 rounded-lg'>
                <h4 className='font-semibold text-purple-900 mb-2'>
                  개인적 효과
                </h4>
                <ul className='text-purple-800 text-sm space-y-1'>
                  <li>• 정서적 자각 증진</li>
                  <li>• 자기 표현 능력 향상</li>
                  <li>• 스트레스 감소</li>
                </ul>
              </div>

              <div className='bg-green-50 p-4 rounded-lg'>
                <h4 className='font-semibold text-green-900 mb-2'>
                  사회적 효과
                </h4>
                <ul className='text-green-800 text-sm space-y-1'>
                  <li>• 갈등 해결 능력 향상</li>
                  <li>• 공감 능력 증진</li>
                  <li>• 관계 개선</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 요가와 명상의 교육적 가치 */}
      <Section background='gray'>
        <SectionHeader
          title='요가와 명상의 교육적 가치'
          subtitle='신체적 활동을 통한 몸과 마음의 통합적 성장'
        />

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h3 className='text-3xl font-bold text-gray-900 mb-6'>
              왜 요가와 명상인가?
            </h3>
            <p className='text-lg text-gray-600 mb-6'>
              요가와 명상은 단순한 신체 운동이나 휴식 기법이 아닌,
              <strong>몸과 마음의 통합적 성장</strong>을 위한 과학적 방법입니다.
            </p>
            <p className='text-lg text-gray-600 mb-6'>
              최신 신경과학 연구에 따르면, 정기적인 요가와 명상은 뇌의 구조와
              기능을 긍정적으로 변화시켜 학습 능력과 정서 조절 능력을
              향상시킵니다.
            </p>

            <div className='bg-blue-50 p-6 rounded-lg'>
              <h4 className='font-semibold text-blue-900 mb-3'>과학적 근거</h4>
              <ul className='text-blue-800 space-y-2'>
                <li>• 전두엽 피질 두께 증가 (집중력, 의사결정 능력 향상)</li>
                <li>• 편도체 크기 감소 (스트레스 반응 감소)</li>
                <li>• 해마 부피 증가 (학습과 기억 능력 향상)</li>
                <li>• 뇌의 연결성 향상 (전체적 인지 기능 개선)</li>
              </ul>
            </div>
          </div>

          <div className='grid gap-6'>
            <Card>
              <CardContent className='p-6'>
                <div className='flex items-start'>
                  <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-white'
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
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      아동 요가의 효과
                    </h4>
                    <ul className='text-gray-600 text-sm space-y-1'>
                      <li>• 신체 발달과 균형 감각 향상</li>
                      <li>• 집중력과 주의력 증진</li>
                      <li>• 정서적 안정과 자기 조절 능력 향상</li>
                      <li>• 자신감과 자기 효능감 증진</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <div className='flex items-start'>
                  <div className='w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-white'
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
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      명상의 교육적 가치
                    </h4>
                    <ul className='text-gray-600 text-sm space-y-1'>
                      <li>• 자기 인식과 정서적 자각 증진</li>
                      <li>• 스트레스 관리와 정서 조절 능력 향상</li>
                      <li>• 공감 능력과 사회적 연결성 증진</li>
                      <li>• 학습 능력과 창의성 향상</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <div className='flex items-start'>
                  <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-white'
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
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      통합적 접근의 효과
                    </h4>
                    <ul className='text-gray-600 text-sm space-y-1'>
                      <li>• 몸과 마음의 균형 잡힌 성장</li>
                      <li>• 전인적 교육의 실현</li>
                      <li>• 지속 가능한 건강한 습관 형성</li>
                      <li>• 일상생활에서의 실천 가능성</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* 몸과 마음의 통합적 성장 접근법 */}
      <Section background='white'>
        <SectionHeader
          title='몸과 마음의 통합적 성장'
          subtitle='SEE Learning®, NVC, 요가와 명상을 통한 혁신적인 교육 접근법'
        />

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h3 className='text-3xl font-bold text-gray-900 mb-6'>
              통합적 접근의 의미
            </h3>
            <p className='text-lg text-gray-600 mb-6'>
              컴패션랩은 <strong>SEE Learning®</strong>, <strong>NVC</strong>,
              <strong>요가와 명상</strong>을 독립적인 요소가 아닌 서로 보완하는
              통합적 교육 시스템으로 접근합니다.
            </p>
            <p className='text-lg text-gray-600 mb-6'>
              이 세 가지 요소가 결합될 때, 학생들은 지적, 정서적, 신체적
              영역에서 균형 잡힌 성장을 경험할 수 있습니다.
            </p>

            <div className='bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg'>
              <h4 className='font-semibold text-gray-900 mb-3'>
                통합적 접근의 효과
              </h4>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <h5 className='font-medium text-gray-900 mb-2'>
                    개인적 성장
                  </h5>
                  <ul className='text-gray-700 text-sm space-y-1'>
                    <li>• 자기 인식과 자아 성찰</li>
                    <li>• 정서적 안정과 자기 조절</li>
                    <li>• 신체적 건강과 웰빙</li>
                  </ul>
                </div>
                <div>
                  <h5 className='font-medium text-gray-900 mb-2'>
                    사회적 성장
                  </h5>
                  <ul className='text-gray-700 text-sm space-y-1'>
                    <li>• 공감 능력과 관계 형성</li>
                    <li>• 갈등 해결과 소통 기술</li>
                    <li>• 사회적 책임과 시민 의식</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              교육 과정에서의 적용
            </h3>
            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-xs'>1</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    SEE Learning® 기반 학습
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    과학적 근거에 기반한 체계적인 사회정서윤리학습
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-xs'>2</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    NVC 소통 훈련
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    효과적인 소통과 갈등 해결 능력 개발
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-xs'>3</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    요가와 명상 활동
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    신체적 활동을 통한 몸과 마음의 균형 회복
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-xs'>4</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    통합적 성장
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    세 가지 요소의 시너지를 통한 전인적 성장
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 과학적 근거 및 연구 결과 */}
      <Section background='blue'>
        <SectionHeader
          title='과학적 근거 및 연구 결과'
          subtitle='최신 연구를 통해 입증된 교육 방법론의 효과성'
        />

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='text-center text-white'>
            <div className='text-4xl font-bold text-yellow-300 mb-2'>85%</div>
            <h3 className='text-xl font-semibold mb-2'>학습 능력 향상</h3>
            <p className='text-blue-100'>
              요가와 명상을 통한 집중력 향상으로 학습 효과가 증진됩니다
            </p>
          </div>

          <div className='text-center text-white'>
            <div className='text-4xl font-bold text-yellow-300 mb-2'>92%</div>
            <h3 className='text-xl font-semibold mb-2'>정서 조절 능력</h3>
            <p className='text-blue-100'>
              SEE Learning®을 통한 정서적 자각과 조절 능력이 향상됩니다
            </p>
          </div>

          <div className='text-center text-white'>
            <div className='text-4xl font-bold text-yellow-300 mb-2'>78%</div>
            <h3 className='text-xl font-semibold mb-2'>소통 능력 향상</h3>
            <p className='text-blue-100'>
              NVC 훈련을 통한 효과적인 소통과 갈등 해결 능력이 향상됩니다
            </p>
          </div>

          <div className='text-center text-white'>
            <div className='text-4xl font-bold text-yellow-300 mb-2'>88%</div>
            <h3 className='text-xl font-semibold mb-2'>전인적 성장</h3>
            <p className='text-blue-100'>
              통합적 접근을 통한 몸과 마음의 균형 잡힌 성장이 이루어집니다
            </p>
          </div>
        </div>

        <div className='mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg'>
          <p className='text-lg text-white text-center'>
            <strong>컴패션랩의 교육 철학</strong>은 최신 과학적 연구에 기반하여
            검증된 방법론들을 통합적으로 적용하여 학생들의 전인적 성장을
            돕습니다.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background='gradient'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>
            교육 철학을 경험해보세요
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            SEE Learning®, NVC, 요가와 명상을 통한 혁신적인 교육 접근법으로
            몸과 마음이 모두 건강한 성장을 경험해보세요
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg'>프로그램 신청하기</Button>
            <Button variant='outline' size='lg'>
              자세히 알아보기
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
