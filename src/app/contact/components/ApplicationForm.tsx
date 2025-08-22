'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { submitApplicationForm } from '../actions';
import { useRef, useState } from 'react';

export const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await submitApplicationForm(formData);

      if (result.success) {
        setMessage({
          type: 'success',
          text: '프로그램 신청이 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.',
        });
        formRef.current?.reset();
      } else {
        setMessage({
          type: 'error',
          text: result.error || '신청서 제출 중 오류가 발생했습니다.',
        });
      }
    } catch (error) {
      console.error('신청서 제출 중 오류:', error);
      setMessage({
        type: 'error',
        text: '신청서 제출 중 오류가 발생했습니다. 다시 시도해주세요.',
      });
    } finally {
      setIsSubmitting(false);
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>프로그램 신청</CardTitle>
      </CardHeader>
      <CardContent>
        {message && (
          <div
            className={`p-4 mb-6 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        <form ref={formRef} action={handleSubmit} className='space-y-6'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <Label htmlFor='name'>이름 *</Label>
              <Input
                id='name'
                name='name'
                placeholder='이름을 입력해주세요'
                required
                className='mt-1'
              />
            </div>

            <div>
              <Label htmlFor='email'>이메일 *</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='이메일을 입력해주세요'
                required
                className='mt-1'
              />
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <Label htmlFor='phone'>연락처 *</Label>
              <Input
                id='phone'
                name='phone'
                placeholder='010-0000-0000'
                required
                className='mt-1'
              />
            </div>

            <div>
              <Label htmlFor='age'>연령대 *</Label>
              <Select name='age' required>
                <SelectTrigger className='mt-1'>
                  <SelectValue placeholder='연령대를 선택해주세요' />
                </SelectTrigger>
                <SelectContent>
                  {ageGroups.map(age => (
                    <SelectItem key={age.value} value={age.value}>
                      {age.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor='program'>희망 프로그램 *</Label>
            <Select name='program' required>
              <SelectTrigger className='mt-1'>
                <SelectValue placeholder='프로그램을 선택해주세요' />
              </SelectTrigger>
              <SelectContent>
                {programs.map(program => (
                  <SelectItem key={program.value} value={program.value}>
                    {program.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor='message'>추가 문의사항</Label>
            <Textarea
              id='message'
              name='message'
              placeholder='추가로 궁금한 점이나 특별한 요청사항이 있으시면 작성해주세요'
              className='resize-none mt-1'
            />
          </div>

          <div>
            <Label>선호하는 연락 방법</Label>
            <div className='space-y-2 mt-1'>
              <div className='flex items-center space-x-2'>
                <input
                  type='radio'
                  id='email-contact'
                  name='preferred_contact'
                  value='email'
                  defaultChecked
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <Label htmlFor='email-contact'>이메일</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <input
                  type='radio'
                  id='phone-contact'
                  name='preferred_contact'
                  value='phone'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                />
                <Label htmlFor='phone-contact'>전화</Label>
              </div>
            </div>
          </div>

          <div className='flex flex-row items-start space-x-3 space-y-0'>
            <input
              type='checkbox'
              id='agree_to_terms'
              name='agree_to_terms'
              value='true'
              required
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-1'
            />
            <div className='space-y-1 leading-none'>
              <Label htmlFor='agree_to_terms' className='text-sm font-normal'>
                개인정보 수집 및 이용에 동의합니다. (필수)
                <a
                  href='#'
                  className='text-blue-600 hover:underline ml-1'
                >
                  자세히 보기
                </a>
              </Label>
            </div>
          </div>

          <Button type='submit' className='w-full' disabled={isSubmitting}>
            {isSubmitting ? '제출 중...' : '프로그램 신청하기'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
