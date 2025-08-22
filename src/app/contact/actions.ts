'use server';

import { revalidatePath } from 'next/cache';

import { type ApplicationFormData, type InquiryFormData, supabase } from '@/lib/supabase';

// 프로그램 신청 폼 액션
export async function submitApplicationForm(formData: FormData) {
  try {
    // FormData에서 데이터 추출
    const data: ApplicationFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      age: formData.get('age') as string,
      program: formData.get('program') as string,
      message: (formData.get('message') as string) || undefined,
      preferred_contact: formData.get('preferred_contact') as 'email' | 'phone',
      agree_to_terms: formData.get('agree_to_terms') === 'true',
    };

    // 데이터 검증
    if (!data.name || !data.email || !data.phone || !data.age || !data.program) {
      return { success: false, error: '필수 항목을 모두 입력해주세요.' };
    }

    if (!data.agree_to_terms) {
      return { success: false, error: '개인정보 수집 및 이용에 동의해주세요.' };
    }

    // Supabase에 데이터 저장
    const { data: result, error } = await supabase.from('applications').insert([data]).select();

    if (error) {
      console.error('Supabase 에러:', error);
      return {
        success: false,
        error: `신청서 저장 중 오류가 발생했습니다: ${error.message}`,
      };
    }

    // 이메일 알림 (실제 구현에서는 이메일 서비스 연동)
    await sendNotificationEmail(data, 'application');

    // 캐시 무효화
    revalidatePath('/contact');

    return { success: true, data: result };
  } catch (error) {
    console.error('신청서 제출 중 오류:', error);
    return { success: false, error: '신청서 제출 중 오류가 발생했습니다.' };
  }
}

// 문의 폼 액션
export async function submitInquiryForm(formData: FormData) {
  try {
    // FormData에서 데이터 추출
    const data: InquiryFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      agree_to_terms: formData.get('agree_to_terms') === 'true',
    };

    // 데이터 검증
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: '필수 항목을 모두 입력해주세요.' };
    }

    if (!data.agree_to_terms) {
      return { success: false, error: '개인정보 수집 및 이용에 동의해주세요.' };
    }

    // Supabase에 데이터 저장
    const { data: result, error } = await supabase.from('inquiries').insert([data]).select();

    if (error) {
      console.error('Supabase 에러:', error);
      return {
        success: false,
        error: `문의 저장 중 오류가 발생했습니다: ${error.message}`,
      };
    }

    // 이메일 알림 (실제 구현에서는 이메일 서비스 연동)
    await sendNotificationEmail(data, 'inquiry');

    // 캐시 무효화
    revalidatePath('/contact');

    return { success: true, data: result };
  } catch (error) {
    console.error('문의 제출 중 오류:', error);
    return { success: false, error: '문의 제출 중 오류가 발생했습니다.' };
  }
}

// 이메일 알림 함수 (실제 구현에서는 이메일 서비스 연동 필요)
async function sendNotificationEmail(formData: ApplicationFormData | InquiryFormData, type: 'application' | 'inquiry') {
  try {
    // TODO: 실제 이메일 서비스 연동 (SendGrid, Resend 등)
    console.log(`${type === 'application' ? '프로그램 신청' : '문의'} 알림 이메일 전송:`, formData);

    // 임시로 콘솔에 출력
    const subject = type === 'application' ? '새로운 프로그램 신청' : '새로운 문의';
    const content = `
      ${subject}
      
      이름: ${formData.name}
      이메일: ${formData.email}
      ${type === 'application' ? `연락처: ${(formData as ApplicationFormData).phone}` : ''}
      ${type === 'application' ? `연령대: ${(formData as ApplicationFormData).age}` : ''}
      ${type === 'application' ? `프로그램: ${(formData as ApplicationFormData).program}` : ''}
      ${type === 'application' ? `선호 연락방법: ${(formData as ApplicationFormData).preferred_contact}` : ''}
      메시지: ${type === 'application' ? (formData as ApplicationFormData).message || '없음' : formData.message}
      
      접수 시간: ${new Date().toLocaleString('ko-KR')}
    `;

    console.log('이메일 내용:', content);

    // 실제 구현에서는 이메일 서비스 API 호출
    return { success: true };
  } catch (error) {
    console.error('이메일 전송 중 오류:', error);
    // 이메일 전송 실패는 전체 프로세스를 중단하지 않음
    return { success: false };
  }
}
