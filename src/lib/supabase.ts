import { createClient } from '@supabase/supabase-js';

// 환경 변수 검증
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase 환경 변수가 설정되지 않았습니다. .env.local 파일을 확인해주세요.');
}

// 서버용 Supabase 클라이언트
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
  preferred_contact: 'email' | 'phone';
  agree_to_terms: boolean;
  created_at?: string;
}

export interface InquiryFormData {
  id?: string;
  name: string;
  email: string;
  message: string;
  agree_to_terms: boolean;
  created_at?: string;
}
