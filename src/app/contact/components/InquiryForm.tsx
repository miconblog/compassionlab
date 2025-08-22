'use client';

import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { submitInquiryForm } from '../actions';

export const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await submitInquiryForm(formData);

      if (result.success) {
        setMessage({
          type: 'success',
          text: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.',
        });
        formRef.current?.reset();
      } else {
        setMessage({
          type: 'error',
          text: result.error || '문의 제출 중 오류가 발생했습니다.',
        });
      }
    } catch (error) {
      console.error('문의 제출 중 오류:', error);
      setMessage({
        type: 'error',
        text: '문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>문의하기</CardTitle>
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

        <form ref={formRef} action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">이름 *</Label>
              <Input id="name" name="name" placeholder="이름을 입력해주세요" required className="mt-1" />
            </div>

            <div>
              <Label htmlFor="email">이메일 *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                required
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">문의내용 *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="궁금한 점이나 문의사항을 자세히 작성해주세요"
              className="resize-none mt-1"
              rows={6}
              required
            />
          </div>

          <div className="flex flex-row items-start space-x-3 space-y-0">
            <input
              type="checkbox"
              id="agree_to_terms"
              name="agree_to_terms"
              value="true"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-1"
            />
            <div className="space-y-1 leading-none">
              <Label htmlFor="agree_to_terms" className="text-sm font-normal">
                개인정보 수집 및 이용에 동의합니다. (필수)
                <a href="#" className="text-blue-600 hover:underline ml-1">
                  자세히 보기
                </a>
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? '제출 중...' : '문의하기'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
