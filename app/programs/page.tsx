import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Section, { SectionHeader } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: '프로그램 - 컴패션랩',
  description:
    '유아부터 성인까지 대상별 맞춤형 SEE Learning® 프로그램. NVC 모델과 요가, 명상을 접목한 통합적 교육 프로그램을 제공합니다.',
  keywords: 'SEE Learning 프로그램, NVC 교육, 요가 명상, 유아교육, 초등교육, 중등교육, 고등교육, 성인교육',
  openGraph: {
    title: '프로그램 - 컴패션랩',
    description: '대상별 맞춤형 SEE Learning® 프로그램',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function ProgramsPage() {
  const programs = [
    {
      id: 'preschool',
      title: '유아 프로그램',
      age: '3-6세',
      description: '자연스러운 놀이를 통해 자기 인식과 공감 능력을 기르는 프로그램',
      features: [
        '놀이 중심의 자기 인식 활동',
        '감정 표현과 이해하기',
        '친구와의 관계 맺기',
        '요가와 명상 기초 체험',
        '부모와 함께하는 활동',
      ],
      duration: '주 2회, 30분씩',
      color: 'blue',
    },
    {
      id: 'elementary',
      title: '초등학생 프로그램',
      age: '7-12세',
      description: 'SEE Learning® 기반의 체계적인 사회정서교육으로 건강한 성장을 돕는 프로그램',
      features: [
        'SEE Learning® 기초 커리큘럼',
        '자기 돌봄과 자기 자비 실천',
        '갈등 해결과 소통 기술',
        '요가와 명상 정기 활동',
        'NVC(비폭력대화) 기초 학습',
      ],
      duration: '주 3회, 45분씩',
      color: 'purple',
    },
    {
      id: 'middle',
      title: '중학생 프로그램',
      age: '13-15세',
      description: '사춘기 시기의 정서적 안정과 사회적 기술 발달을 위한 맞춤형 프로그램',
      features: [
        'SEE Learning® 심화 과정',
        '스트레스 관리와 정서 조절',
        '또래 관계와 갈등 해결',
        '자기 효능감과 동기 부여',
        'NVC를 활용한 소통 훈련',
      ],
      duration: '주 2회, 60분씩',
      color: 'green',
    },
    {
      id: 'high',
      title: '고등학생 프로그램',
      age: '16-18세',
      description: '성인으로 성장하는 과정에서 필요한 인성과 리더십을 기르는 프로그램',
      features: [
        'SEE Learning® 고급 과정',
        '윤리적 의사결정과 리더십',
        '미래 설계와 목표 설정',
        '스트레스 관리와 자기 돌봄',
        '사회적 책임과 시민 의식',
      ],
      duration: '주 2회, 90분씩',
      color: 'orange',
    },
    {
      id: 'adult',
      title: '성인 프로그램',
      age: '19세 이상',
      description: '성인을 위한 자기 돌봄과 관계 개선, 그리고 지역사회 기여를 위한 프로그램',
      features: [
        '성인을 위한 SEE Learning®',
        '자기 돌봄과 웰빙 증진',
        '가족 관계와 소통 개선',
        '직장 내 스트레스 관리',
        '지역사회 봉사 활동',
      ],
      duration: '주 1회, 120분씩',
      color: 'red',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-amber-50 border-amber-200 text-amber-800',
      purple: 'bg-orange-50 border-orange-200 text-orange-800',
      green: 'bg-red-50 border-red-200 text-red-800',
      orange: 'bg-amber-100 border-amber-300 text-amber-900',
      red: 'bg-orange-100 border-orange-300 text-orange-900',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">프로그램</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            유아부터 성인까지 각 대상별 맞춤형 프로그램으로
            <br />
            몸과 마음이 모두 건강한 성장을 돕습니다
          </p>
        </div>
      </section>

      {/* 프로그램 소개 */}
      <Section background="white">
        <SectionHeader
          title="대상별 맞춤형 프로그램"
          subtitle="SEE Learning®과 NVC 모델을 기반으로 각 연령대에 최적화된 교육 프로그램을 제공합니다"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(program.color)} mb-4 w-fit`}
                >
                  {program.age}
                </div>

                <h3 className="text-2xl font-bold text-amber-900 mb-3">{program.title}</h3>

                <p className="text-amber-700 mb-4 flex-grow">{program.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 mb-2">주요 특징</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, index) => (
                      <li key={index} className="text-sm text-amber-700 flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-amber-100">
                  <p className="text-sm text-amber-600 mb-3">
                    <strong>수업 시간:</strong> {program.duration}
                  </p>
                  <Button size="sm" className="w-full">
                    자세히 알아보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* SEE Learning 기반 커리큘럼 */}
      <Section background="gray">
        <SectionHeader
          title="SEE Learning® 기반 커리큘럼"
          subtitle="미국 에모리 대학교에서 개발된 과학적 근거 기반의 교육 프로그램"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-6">SEE Learning®이란?</h3>
            <p className="text-lg text-amber-700 mb-6">
              Social, Emotional, and Ethical Learning의 약자로, 사회정서윤리학습을 의미합니다. 공감의 과학을
              사회정서학습에 접목시킨 혁신적인 교육 모델입니다.
            </p>
            <p className="text-lg text-amber-700 mb-6">
              컴패션랩은 SEE Learning®을 한국의 교육 환경과 강릉 지역의 특성에 맞게 현지화하여 제공하고 있습니다.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-2">핵심 구성 요소</h4>
              <ul className="text-amber-800 space-y-1">
                <li>• 공감의 과학적 이해</li>
                <li>• 자기 인식과 정서 조절</li>
                <li>• 사회적 연결성과 관계</li>
                <li>• 윤리적 의사결정</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">NVC 모델 적용</h3>
            <p className="text-amber-700 mb-6">
              비폭력대화(Nonviolent Communication) 모델을 교육에 접목하여 효과적인 소통과 갈등 해결 능력을 기릅니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <span className="text-amber-800">관찰하기</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <span className="text-amber-800">감정 인식하기</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <span className="text-amber-800">욕구 파악하기</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <span className="text-amber-800">요청하기</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 요가와 명상 프로그램 */}
      <Section background="white">
        <SectionHeader title="요가와 명상 프로그램" subtitle="신체적 활동을 통해 몸과 마음의 균형을 찾는 통합적 교육" />

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">아동 요가</h3>
              <p className="text-amber-700">연령에 맞는 재미있는 요가 동작을 통해 신체 발달과 정서 안정을 돕습니다.</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">명상 활동</h3>
              <p className="text-amber-700">간단한 명상 기법을 통해 집중력과 자기 인식을 향상시킵니다.</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">통합 활동</h3>
              <p className="text-amber-700">요가와 명상을 결합한 통합적 활동으로 몸과 마음의 균형을 찾습니다.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 프로그램 효과성 */}
      <Section background="white">
        <SectionHeader title="프로그램 효과성" subtitle="과학적 근거에 기반한 교육 프로그램의 성과" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg p-6 shadow-lg">
            <div className="text-5xl font-bold text-white mb-3">85%</div>
            <h3 className="text-xl font-semibold mb-3 text-white">정서 조절 능력 향상</h3>
            <p className="text-white/95 leading-relaxed">스트레스 상황에서의 정서 조절 능력이 크게 향상됩니다</p>
          </div>

          <div className="text-center bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-6 shadow-lg">
            <div className="text-5xl font-bold text-white mb-3">92%</div>
            <h3 className="text-xl font-semibold mb-3 text-white">공감 능력 증진</h3>
            <p className="text-white/95 leading-relaxed">타인에 대한 이해와 공감 능력이 현저히 증진됩니다</p>
          </div>

          <div className="text-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg p-6 shadow-lg">
            <div className="text-5xl font-bold text-white mb-3">78%</div>
            <h3 className="text-xl font-semibold mb-3 text-white">갈등 해결 능력</h3>
            <p className="text-white/95 leading-relaxed">NVC를 활용한 갈등 해결 능력이 향상됩니다</p>
          </div>

          <div className="text-center bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-6 shadow-lg">
            <div className="text-5xl font-bold text-white mb-3">88%</div>
            <h3 className="text-xl font-semibold mb-3 text-white">자기 효능감</h3>
            <p className="text-white/95 leading-relaxed">학습과 생활에 대한 자기 효능감이 향상됩니다</p>
          </div>
        </div>
      </Section>

      {/* 향후 계획 */}
      <Section background="white">
        <SectionHeader title="향후 계획" subtitle="글로벌 교육 확장을 통한 더 넓은 교육 기회 제공" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-6">해외 SEE Learning 학교와의 연계</h3>
            <p className="text-lg text-amber-700 mb-6">
              해외에 있는 SEE Learning 학교와 연계하여 방학 중 해외 연수 프로그램 및 교환 학습을 운영할 계획을 가지고
              있으며, 이를 통해 글로벌 교육의 장을 확장해 나갈 것입니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">해외 파트너십 구축</h4>
                  <p className="text-amber-700 text-sm">
                    Emory University, UBC 등 해외 SEE Learning 기관과의 협력 관계 수립
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">방학 연수 프로그램</h4>
                  <p className="text-amber-700 text-sm">여름/겨울 방학을 활용한 해외 연수 프로그램 운영</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">교환 학습 프로그램</h4>
                  <p className="text-amber-700 text-sm">
                    국제 학생들과의 교환 학습을 통한 문화 교류 및 글로벌 시각 확장
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">글로벌 교육 비전</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🌏</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900">국제적 시각</h4>
                  <p className="text-amber-700 text-sm">다양한 문화권의 교육 방식 경험</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900">협력 네트워크</h4>
                  <p className="text-amber-700 text-sm">글로벌 교육 파트너십 구축</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900">교육 혁신</h4>
                  <p className="text-amber-700 text-sm">최신 교육 트렌드와 방법론 도입</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">프로그램 신청하기</h2>
          <p className="text-xl text-amber-700 mb-8 max-w-3xl mx-auto">
            강릉 지역의 특성에 맞는 맞춤형 프로그램으로 몸과 마음이 모두 건강한 성장을 경험해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">프로그램 신청하기</Button>
            <Button variant="outline" size="lg">
              문의하기
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
