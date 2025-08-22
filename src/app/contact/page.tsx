import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Section, { SectionHeader } from '@/components/ui/Section';
import { ContactTabs } from './components/ContactTabs';

export default function ContactPage() {
  const faqs = [
    {
      question: '프로그램은 언제 시작할 수 있나요?',
      answer:
        '연중 상시 신청 가능하며, 월별로 새로운 반이 개설됩니다. 개별 상담을 통해 적절한 시작 시기를 안내해드립니다.',
    },
    {
      question: '수업료는 어떻게 되나요?',
      answer:
        '프로그램별로 차등 적용되며, 월 수업료와 등록비로 구성됩니다. 자세한 안내는 개별 상담 시 제공해드립니다.',
    },
    {
      question: '강릉 외 지역에서도 참여 가능한가요?',
      answer:
        '현재는 강릉 지역을 중심으로 운영하고 있으나, 향후 온라인 프로그램 확대를 계획하고 있습니다.',
    },
    {
      question: '부모님도 함께 참여할 수 있나요?',
      answer:
        '유아 프로그램의 경우 부모님과 함께하는 활동이 포함되어 있으며, 성인 프로그램도 별도로 운영됩니다.',
    },
    {
      question: '프로그램 효과는 언제부터 나타나나요?',
      answer:
        '개인차가 있지만, 일반적으로 3-6개월 후부터 변화를 체감할 수 있으며, 정기적인 평가를 통해 진행 상황을 확인합니다.',
    },
    {
      question: '환불 정책은 어떻게 되나요?',
      answer:
        '수업 시작 전 100% 환불, 시작 후 1주일 이내 70% 환불, 이후에는 환불이 제한됩니다. 자세한 사항은 계약서에 명시됩니다.',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-6'>문의 및 신청</h1>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
            강릉 지역의 특성에 맞는 맞춤형 프로그램으로
            <br />
            몸과 마음이 모두 건강한 성장을 경험해보세요
          </p>
        </div>
      </section>

      {/* 탭 네비게이션 */}
      <Section background='white' id='contact-forms'>
        <ContactTabs />
      </Section>

      {/* 강릉 지역 연락처 정보 */}
      <Section background='gray'>
        <SectionHeader
          title='강릉 지역 연락처 정보'
          subtitle='컴패션랩과 쉽게 연락하실 수 있습니다'
        />

        <div className='grid md:grid-cols-3 gap-8'>
          <Card>
            <CardContent className='text-center p-6'>
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
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                전화 문의
              </h3>
              <p className='text-gray-600 mb-2'>평일 09:00 - 18:00</p>
              <p className='text-2xl font-bold text-blue-600'>033-123-4567</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='text-center p-6'>
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
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                이메일 문의
              </h3>
              <p className='text-gray-600 mb-2'>24시간 접수 가능</p>
              <p className='text-lg font-semibold text-purple-600'>
                info@compassionlab.kr
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='text-center p-6'>
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
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>위치</h3>
              <p className='text-gray-600 mb-2'>강릉시 교육센터</p>
              <p className='text-sm text-green-600'>강릉시 중앙로 123번길 45</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 프로그램 일정 및 등록 안내 */}
      <Section background='white'>
        <SectionHeader
          title='프로그램 일정 및 등록 안내'
          subtitle='2024년 프로그램 일정과 등록 절차를 안내해드립니다'
        />

        <div className='grid lg:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              2024년 프로그램 일정
            </h3>
            <div className='space-y-4'>
              <div className='border-l-4 border-blue-600 pl-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  1분기 (3-5월)
                </h4>
                <p className='text-gray-600'>
                  신학기 맞춤 프로그램, 봄 특별 활동
                </p>
              </div>
              <div className='border-l-4 border-purple-600 pl-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  2분기 (6-8월)
                </h4>
                <p className='text-gray-600'>
                  여름 방학 특별 프로그램, 야외 활동
                </p>
              </div>
              <div className='border-l-4 border-green-600 pl-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  3분기 (9-11월)
                </h4>
                <p className='text-gray-600'>가을 정기 프로그램, 성과 평가</p>
              </div>
              <div className='border-l-4 border-orange-600 pl-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  4분기 (12-2월)
                </h4>
                <p className='text-gray-600'>
                  겨울 특별 프로그램, 연간 성과 총평
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>등록 절차</h3>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-xs'>1</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    상담 신청
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    전화, 이메일 또는 온라인으로 상담을 신청합니다
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-xs'>2</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    개별 상담
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    전문 강사와 1:1 맞춤 상담을 진행합니다
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-xs'>3</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    프로그램 선택
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    상담 결과를 바탕으로 적합한 프로그램을 선택합니다
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <span className='text-white font-bold text-xs'>4</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    등록 완료
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    계약서 작성 후 등록비 납부로 등록이 완료됩니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ 섹션 */}
      <Section background='gray'>
        <SectionHeader
          title='자주 묻는 질문'
          subtitle='많이 궁금해하시는 질문들을 모았습니다'
        />

        <div className='max-w-4xl mx-auto'>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <Card key={`faq-${index}-${faq.question}`}>
                <CardContent className='p-6'>
                  <details className='group'>
                    <summary className='flex justify-between items-center cursor-pointer list-none'>
                      <h3 className='text-lg font-semibold text-gray-900 group-open:text-blue-600'>
                        {faq.question}
                      </h3>
                      <svg
                        className='w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </summary>
                    <p className='mt-4 text-gray-600 leading-relaxed'>
                      {faq.answer}
                    </p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background='gradient'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>
            지금 바로 시작하세요
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            강릉 지역의 특성에 맞는 맞춤형 프로그램으로 몸과 마음이 모두 건강한
            성장을 경험해보세요
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' asChild>
              <a href='#contact-forms'>프로그램 신청하기</a>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <a href='#contact-forms'>문의하기</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
