-- Supabase 데이터베이스 스키마
-- 이 파일을 Supabase SQL Editor에서 실행하여 테이블을 생성하세요

-- 프로그램 신청 테이블
CREATE TABLE applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  age TEXT NOT NULL,
  program TEXT NOT NULL,
  message TEXT,
  preferred_contact TEXT NOT NULL CHECK (preferred_contact IN ('email', 'phone')),
  agree_to_terms BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 문의 테이블
CREATE TABLE inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  agree_to_terms BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) 설정
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- 관리자만 모든 데이터를 볼 수 있도록 정책 설정
CREATE POLICY "관리자만 모든 신청서 조회 가능" ON applications
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "관리자만 모든 문의 조회 가능" ON inquiries
  FOR ALL USING (auth.role() = 'authenticated');

-- 인증되지 않은 사용자는 삽입만 가능
CREATE POLICY "인증되지 않은 사용자 신청서 삽입 가능" ON applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "인증되지 않은 사용자 문의 삽입 가능" ON inquiries
  FOR INSERT WITH CHECK (true);

-- 인덱스 생성 (성능 최적화)
CREATE INDEX idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX idx_applications_email ON applications(email);
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX idx_inquiries_email ON inquiries(email);

-- 함수: updated_at 자동 업데이트
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 트리거 설정
CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_inquiries_updated_at
  BEFORE UPDATE ON inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
