'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Section, { SectionHeader } from '@/components/ui/Section';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  saveApplicationForm,
  saveInquiryForm,
  sendNotificationEmail,
} from '@/lib/supabase';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// 폼 검증 스키마
const applicationSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  phone: z.string().min(1, '연락처를 입력해주세요'),
  age: z.string().min(1, '연령대를 선택해주세요'),
  program: z.string().min(1, '프로그램을 선택해주세요'),
  message: z.string().optional(),
  preferredContact: z.enum(['email', 'phone']),
  agreeToTerms: z
    .boolean()
    .refine(val => val === true, '개인정보 수집 및 이용에 동의해주세요'),
});

const inquirySchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  message: z.string().min(1, '문의내용을 입력해주세요'),
  agreeToTerms: z
    .boolean()
    .refine(val => val === true, '개인정보 수집 및 이용에 동의해주세요'),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;
type InquiryFormData = z.infer<typeof inquirySchema>;

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'application' | 'inquiry'>(
    'application'
  );

  const applicationForm = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      age: '',
      program: '',
      message: '',
      preferredContact: 'email',
      agreeToTerms: false,
    },
  });

  const inquiryForm = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      agreeToTerms: false,
    },
  });

  const onApplicationSubmit = async (data: ApplicationFormData) => {
    try {
      // Supabase에 데이터 저장
      await saveApplicationForm(data);

      // 이메일 알림 전송
      await sendNotificationEmail(data, 'application');

      alert(
        '프로그램 신청이 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.'
      );
      applicationForm.reset();
    } catch (error) {
      console.error('신청서 제출 중 오류:', error);
      alert('신청서 제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const onInquirySubmit = async (data: InquiryFormData) => {
    try {
      // Supabase에 데이터 저장
      await saveInquiryForm(data);

      // 이메일 알림 전송
      await sendNotificationEmail(data, 'inquiry');

      alert(
        '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.'
      );
      inquiryForm.reset();
    } catch (error) {
      console.error('문의 제출 중 오류:', error);
      alert('문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const programs = [
    { value: 'preschool', label: '유아 프로그램 (3-6세)' },
    { value: 'elementary', label: '초등학생 프로그램 (7-12세)' },
    { value: 'middle', label: '중학생 프로그램 (13-15세)' },
    { value: 'high', label: '고등학생 프로그램 (16-18세)' },
    { value: 'adult', label: '성인 프로그램 (19세 이상)' },
  ];

  const ageGroups = [
    { value: '3-6', label: '3-6세' },
    { value: '7-12', label: '7-12세' },
    { value: '13-15', label: '13-15세' },
    { value: '16-18', label: '16-18세' },
    { value: '19+', label: '19세 이상' },
  ];

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
      <Section background='white'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex border-b border-gray-200 mb-8'>
            <button
              onClick={() => setActiveTab('application')}
              className={`px-6 py-3 text-lg font-medium border-b-2 transition-colors ${
                activeTab === 'application'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              프로그램 신청
            </button>
            <button
              onClick={() => setActiveTab('inquiry')}
              className={`px-6 py-3 text-lg font-medium border-b-2 transition-colors ${
                activeTab === 'inquiry'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              문의하기
            </button>
          </div>

          {/* 프로그램 신청 폼 */}
          {activeTab === 'application' && (
            <Card>
              <CardHeader>
                <CardTitle>프로그램 신청</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...applicationForm}>
                  <form
                    onSubmit={applicationForm.handleSubmit(onApplicationSubmit)}
                    className='space-y-6'
                  >
                    <div className='grid md:grid-cols-2 gap-6'>
                      <FormField
                        control={applicationForm.control}
                        name='name'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이름 *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder='이름을 입력해주세요'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={applicationForm.control}
                        name='email'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이메일 *</FormLabel>
                            <FormControl>
                              <Input
                                type='email'
                                placeholder='이메일을 입력해주세요'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <FormField
                        control={applicationForm.control}
                        name='phone'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>연락처 *</FormLabel>
                            <FormControl>
                              <Input placeholder='010-0000-0000' {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={applicationForm.control}
                        name='age'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>연령대 *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder='연령대를 선택해주세요' />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {ageGroups.map(age => (
                                  <SelectItem key={age.value} value={age.value}>
                                    {age.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={applicationForm.control}
                      name='program'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>희망 프로그램 *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='프로그램을 선택해주세요' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {programs.map(program => (
                                <SelectItem
                                  key={program.value}
                                  value={program.value}
                                >
                                  {program.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={applicationForm.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>추가 문의사항</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='추가로 궁금한 점이나 특별한 요청사항이 있으시면 작성해주세요'
                              className='resize-none'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={applicationForm.control}
                      name='preferredContact'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>선호하는 연락 방법</FormLabel>
                          <div className='space-y-2'>
                            <div className='flex items-center space-x-2'>
                              <input
                                type='radio'
                                id='email-contact'
                                value='email'
                                checked={field.value === 'email'}
                                onChange={field.onChange}
                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                              />
                              <Label htmlFor='email-contact'>이메일</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <input
                                type='radio'
                                id='phone-contact'
                                value='phone'
                                checked={field.value === 'phone'}
                                onChange={field.onChange}
                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                              />
                              <Label htmlFor='phone-contact'>전화</Label>
                            </div>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={applicationForm.control}
                      name='agreeToTerms'
                      render={({ field }) => (
                        <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                          <FormControl>
                            <input
                              type='checkbox'
                              checked={field.value}
                              onChange={field.onChange}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                            />
                          </FormControl>
                          <div className='space-y-1 leading-none'>
                            <FormLabel className='text-sm font-normal'>
                              개인정보 수집 및 이용에 동의합니다. (필수)
                              <a
                                href='#'
                                className='text-blue-600 hover:underline ml-1'
                              >
                                자세히 보기
                              </a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type='submit' className='w-full'>
                      프로그램 신청하기
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {/* 문의하기 폼 */}
          {activeTab === 'inquiry' && (
            <Card>
              <CardHeader>
                <CardTitle>문의하기</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...inquiryForm}>
                  <form
                    onSubmit={inquiryForm.handleSubmit(onInquirySubmit)}
                    className='space-y-6'
                  >
                    <div className='grid md:grid-cols-2 gap-6'>
                      <FormField
                        control={inquiryForm.control}
                        name='name'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이름 *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder='이름을 입력해주세요'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={inquiryForm.control}
                        name='email'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이메일 *</FormLabel>
                            <FormControl>
                              <Input
                                type='email'
                                placeholder='이메일을 입력해주세요'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={inquiryForm.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>문의내용 *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='궁금한 점이나 문의사항을 자세히 작성해주세요'
                              className='resize-none'
                              rows={6}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={inquiryForm.control}
                      name='agreeToTerms'
                      render={({ field }) => (
                        <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                          <FormControl>
                            <input
                              type='checkbox'
                              checked={field.value}
                              onChange={field.onChange}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                            />
                          </FormControl>
                          <div className='space-y-1 leading-none'>
                            <FormLabel className='text-sm font-normal'>
                              개인정보 수집 및 이용에 동의합니다. (필수)
                              <a
                                href='#'
                                className='text-blue-600 hover:underline ml-1'
                              >
                                자세히 보기
                              </a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type='submit' className='w-full'>
                      문의하기
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
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
              <Card key={index}>
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
            <Button size='lg' onClick={() => setActiveTab('application')}>
              프로그램 신청하기
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={() => setActiveTab('inquiry')}
            >
              문의하기
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
