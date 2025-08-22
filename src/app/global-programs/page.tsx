import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Section, { SectionHeader } from '@/components/ui/Section';

export default function GlobalProgramsPage() {
  const partnerSchools = [
    {
      name: 'Emory University SEE Learning Center',
      country: '미국',
      location: '애틀랜타, 조지아',
      description:
        'SEE Learning의 발상지이자 글로벌 허브로, 최고 수준의 교육 프로그램을 제공합니다.',
      programs: ['교사 연수', '리더십 개발', '연구 협력'],
      logo: '/images/emory-logo.png',
    },
    {
      name: 'Mind & Life Institute',
      country: '미국',
      location: '샬럿츠빌, 버지니아',
      description:
        '명상과 과학의 융합을 연구하는 세계적 기관으로, SEE Learning의 과학적 기반을 제공합니다.',
      programs: ['연구 협력', '컨퍼런스 참가', '자원 공유'],
      logo: '/images/mindlife-logo.png',
    },
    {
      name: 'University of British Columbia',
      country: '캐나다',
      location: '밴쿠버, 브리티시 컬럼비아',
      description:
        '북미 최고의 교육 연구 기관으로, 다문화 환경에서의 SEE Learning 적용 사례를 연구합니다.',
      programs: ['학생 교환', '연구 협력', '문화 교류'],
      logo: '/images/ubc-logo.png',
    },
  ];

  const exchangePrograms = [
    {
      title: '여름 방학 연수 프로그램',
      duration: '4주',
      period: '7월 - 8월',
      location: '미국 애틀랜타',
      description:
        'Emory University에서 직접 SEE Learning을 체험하고 글로벌 네트워크를 구축합니다.',
      highlights: [
        'Emory SEE Learning Center 직접 방문',
        '현지 학교 교육 현장 참관',
        '국제 학생들과의 문화 교류',
        'SEE Learning 전문가와의 워크샵',
        '애틀랜타 지역 문화 체험',
      ],
      target: '고등학생, 대학생, 교사',
      capacity: '15명',
    },
    {
      title: '겨울 방학 단기 연수',
      duration: '2주',
      period: '1월 - 2월',
      location: '캐나다 밴쿠버',
      description:
        'UBC에서 다문화 환경의 SEE Learning 적용 사례를 학습하고 국제적 시각을 기릅니다.',
      highlights: [
        'UBC 교육학부 강의 참관',
        '캐나다 현지 학교 방문',
        '다문화 교육 워크샵',
        '밴쿠버 지역 문화 체험',
        '국제 친구들과의 네트워킹',
      ],
      target: '중학생, 고등학생',
      capacity: '20명',
    },
  ];

  const roadmap = [
    {
      year: '2024',
      phase: '1단계: 기반 구축',
      goals: [
        '해외 파트너십 기관과 MOU 체결',
        '첫 번째 여름 방학 연수 프로그램 시행',
        '국제 협력 네트워크 구축',
        '온라인 교류 플랫폼 구축',
      ],
      achievements: [
        'Emory University와 협력 관계 수립',
        '첫 번째 연수 프로그램 성공적 완료',
        '국제 SEE Learning 컨퍼런스 참가',
      ],
    },
    {
      year: '2025',
      phase: '2단계: 확장 및 발전',
      goals: [
        '연간 3회 정기 연수 프로그램 운영',
        '학생 교환 프로그램 정식 시작',
        '연구 협력 프로젝트 진행',
        '한국 SEE Learning 허브 역할 강화',
      ],
      achievements: [
        '겨울, 봄, 여름 연수 프로그램 정례화',
        '캐나다 UBC와 학생 교환 협정 체결',
        '국제 연구 프로젝트 참여',
      ],
    },
    {
      year: '2026',
      phase: '3단계: 글로벌 리더십',
      goals: [
        '아시아 지역 SEE Learning 허브 구축',
        '국제 컨퍼런스 주최',
        '글로벌 교육 프로그램 개발 및 수출',
        '지속가능한 국제 협력 체계 확립',
      ],
      achievements: [
        '아시아 SEE Learning 네트워크 구축',
        '서울에서 국제 컨퍼런스 개최',
        '한국형 SEE Learning 모델 해외 수출',
      ],
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-6'>글로벌 프로그램</h1>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
            세계 최고의 SEE Learning 기관들과 함께하는
            <br />
            글로벌 교육 경험을 제공합니다
          </p>
        </div>
      </section>

      {/* 해외 SEE Learning 학교 연계 계획 */}
      <Section background='white'>
        <SectionHeader
          title='해외 SEE Learning 학교 연계 계획'
          subtitle='세계 최고의 교육 기관들과의 협력을 통해 글로벌 교육 네트워크를 구축합니다'
        />

        <div className='grid lg:grid-cols-3 gap-8'>
          {partnerSchools.map((school, index) => (
            <Card key={index} className='h-full'>
              <CardContent className='p-6'>
                <div className='text-center mb-6'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-2xl font-bold text-blue-600'>
                      {school.country === '미국' ? '🇺🇸' : '🇨🇦'}
                    </span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {school.name}
                  </h3>
                  <p className='text-sm text-gray-600 mb-2'>
                    {school.location}, {school.country}
                  </p>
                </div>

                <p className='text-gray-700 mb-4 leading-relaxed'>
                  {school.description}
                </p>

                <div className='space-y-2'>
                  <h4 className='font-semibold text-gray-900 text-sm'>
                    주요 프로그램:
                  </h4>
                  <ul className='space-y-1'>
                    {school.programs.map((program, idx) => (
                      <li
                        key={idx}
                        className='text-sm text-gray-600 flex items-center'
                      >
                        <span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 방학 중 해외 연수 프로그램 */}
      <Section background='gray'>
        <SectionHeader
          title='방학 중 해외 연수 프로그램'
          subtitle='세계 최고의 SEE Learning 기관에서 직접 체험하는 특별한 교육 경험'
        />

        <div className='space-y-8'>
          {exchangePrograms.map((program, index) => (
            <Card key={index}>
              <CardContent className='p-8'>
                <div className='grid lg:grid-cols-2 gap-8'>
                  <div>
                    <div className='flex items-center justify-between mb-4'>
                      <h3 className='text-2xl font-bold text-gray-900'>
                        {program.title}
                      </h3>
                      <div className='text-right'>
                        <div className='text-sm text-gray-600'>기간</div>
                        <div className='font-semibold text-blue-600'>
                          {program.duration}
                        </div>
                      </div>
                    </div>

                    <div className='space-y-4 mb-6'>
                      <div className='flex items-center text-gray-600'>
                        <span className='w-4 h-4 mr-2'>📅</span>
                        {program.period}
                      </div>
                      <div className='flex items-center text-gray-600'>
                        <span className='w-4 h-4 mr-2'>📍</span>
                        {program.location}
                      </div>
                      <div className='flex items-center text-gray-600'>
                        <span className='w-4 h-4 mr-2'>👥</span>
                        대상: {program.target}
                      </div>
                      <div className='flex items-center text-gray-600'>
                        <span className='w-4 h-4 mr-2'>🎯</span>
                        모집 인원: {program.capacity}
                      </div>
                    </div>

                    <p className='text-gray-700 leading-relaxed mb-6'>
                      {program.description}
                    </p>

                    <Button className='w-full'>프로그램 신청하기</Button>
                  </div>

                  <div>
                    <h4 className='font-semibold text-gray-900 mb-4'>
                      주요 하이라이트
                    </h4>
                    <ul className='space-y-3'>
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className='flex items-start'>
                          <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                          <span className='text-gray-700'>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 교환 학습 프로그램 안내 */}
      <Section background='white'>
        <SectionHeader
          title='교환 학습 프로그램 안내'
          subtitle='국제 학생들과 함께하는 문화 교류 및 학습 경험'
        />

        <div className='grid lg:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              프로그램 특징
            </h3>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-sm'>1</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    현지 학교 직접 방문
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    해외 파트너 학교에서 실제 수업에 참관하고 교육 현장을 직접
                    체험합니다.
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-sm'>2</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    문화 교류 활동
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    현지 학생들과 함께하는 문화 교류 활동을 통해 글로벌 시각을
                    기릅니다.
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-sm'>3</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    전문가 워크샵
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    SEE Learning 전문가들과 함께하는 특별 워크샵을 통해 심화
                    학습을 진행합니다.
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-sm'>4</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    네트워킹 기회
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    국제 학생들과의 네트워킹을 통해 평생 지속될 수 있는 글로벌
                    인맥을 구축합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>지원 혜택</h3>
            <div className='space-y-4'>
              <Card>
                <CardContent className='p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    장학금 지원
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    우수한 학생에게는 연수 비용의 일부를 장학금으로 지원합니다.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    숙박 및 식사 제공
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    연수 기간 동안 안전하고 편안한 숙박 시설과 식사를
                    제공합니다.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    현지 가이드
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    현지 문화와 언어에 익숙한 가이드가 연수 기간 동안
                    함께합니다.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    수료증 발급
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    연수 완료 후 공식 수료증을 발급하여 학업 및 경력에 활용할 수
                    있습니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* 글로벌 교육 확장 비전 */}
      <Section background='gradient'>
        <SectionHeader
          title='글로벌 교육 확장 비전'
          subtitle='한국을 중심으로 한 아시아 지역 SEE Learning 허브 구축'
        />

        <div className='grid lg:grid-cols-3 gap-8'>
          <Card>
            <CardContent className='text-center p-6'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🌏</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                아시아 허브
              </h3>
              <p className='text-gray-600'>
                한국을 중심으로 한 아시아 지역 SEE Learning 네트워크를 구축하여
                지역 내 교육 혁신을 주도합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='text-center p-6'>
              <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎓</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                연구 중심
              </h3>
              <p className='text-gray-600'>
                아시아 문화권에 특화된 SEE Learning 모델을 연구하고 개발하여
                글로벌 교육 발전에 기여합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='text-center p-6'>
              <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🤝</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                협력 네트워크
              </h3>
              <p className='text-gray-600'>
                아시아 각국의 교육 기관들과 협력하여 지속가능한 교육 생태계를
                구축합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 글로벌 확장 로드맵 */}
      <Section background='white'>
        <SectionHeader
          title='글로벌 확장 로드맵'
          subtitle='2024년부터 2026년까지의 단계별 발전 계획'
        />

        <div className='space-y-8'>
          {roadmap.map((phase, index) => (
            <Card key={index}>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-6'>
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center'>
                      <span className='text-white font-bold text-lg'>
                        {phase.year}
                      </span>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>
                      {phase.phase}
                    </h3>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-3'>
                          목표
                        </h4>
                        <ul className='space-y-2'>
                          {phase.goals.map((goal, idx) => (
                            <li key={idx} className='flex items-start'>
                              <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                              <span className='text-gray-700 text-sm'>
                                {goal}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className='font-semibold text-gray-900 mb-3'>
                          예상 성과
                        </h4>
                        <ul className='space-y-2'>
                          {phase.achievements.map((achievement, idx) => (
                            <li key={idx} className='flex items-start'>
                              <span className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                              <span className='text-gray-700 text-sm'>
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background='blue'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            글로벌 교육 경험을 시작하세요
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            세계 최고의 SEE Learning 기관들과 함께하는 특별한 교육 경험을 통해
            글로벌 시각과 역량을 기르고 미래를 준비하세요
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' variant='secondary'>
              연수 프로그램 신청하기
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-white border-white hover:bg-white hover:text-blue-600'
            >
              상담 신청하기
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
