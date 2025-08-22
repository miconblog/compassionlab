import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 폼 데이터 타입 정의
export interface ApplicationFormData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  age: string;
  program: string;
  message?: string;
  preferredContact: 'email' | 'phone';
  agreeToTerms: boolean;
  created_at?: string;
}

export interface InquiryFormData {
  id?: string;
  name: string;
  email: string;
  message: string;
  agreeToTerms: boolean;
  created_at?: string;
}

// 폼 데이터 저장 함수들
export const saveApplicationForm = async (data: ApplicationFormData) => {
  const { data: result, error } = await supabase
    .from('applications')
    .insert([data])
    .select();

  if (error) {
    throw new Error(`신청서 저장 중 오류가 발생했습니다: ${error.message}`);
  }

  return result;
};

export const saveInquiryForm = async (data: InquiryFormData) => {
  const { data: result, error } = await supabase
    .from('inquiries')
    .insert([data])
    .select();

  if (error) {
    throw new Error(`문의 저장 중 오류가 발생했습니다: ${error.message}`);
  }

  return result;
};

// 이메일 알림 함수 (실제 구현에서는 이메일 서비스 연동 필요)
export const sendNotificationEmail = async (
  formData: ApplicationFormData | InquiryFormData,
  type: 'application' | 'inquiry'
) => {
  // TODO: 실제 이메일 서비스 연동 (SendGrid, Resend 등)
  console.log(
    `${type === 'application' ? '프로그램 신청' : '문의'} 알림 이메일 전송:`,
    formData
  );

  // 임시로 콘솔에 출력
  const subject =
    type === 'application' ? '새로운 프로그램 신청' : '새로운 문의';
  const content = `
    ${subject}
    
    이름: ${formData.name}
    이메일: ${formData.email}
    ${type === 'application' ? `연락처: ${(formData as ApplicationFormData).phone}` : ''}
    ${type === 'application' ? `연령대: ${(formData as ApplicationFormData).age}` : ''}
    ${type === 'application' ? `프로그램: ${(formData as ApplicationFormData).program}` : ''}
    ${type === 'application' ? `선호 연락방법: ${(formData as ApplicationFormData).preferredContact}` : ''}
    메시지: ${type === 'application' ? (formData as ApplicationFormData).message || '없음' : formData.message}
    
    접수 시간: ${new Date().toLocaleString('ko-KR')}
  `;

  console.log('이메일 내용:', content);

  // 실제 구현에서는 이메일 서비스 API 호출
  return { success: true };
};
