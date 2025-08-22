-- Supabase 데이터베이스 스키마 (개발용 - 완전 재생성)
-- 이 파일을 Supabase SQL Editor에서 실행하여 테이블을 생성하세요

-- 기존 테이블 및 관련 객체 삭제 (개발 초기 단계용)
DROP TRIGGER IF EXISTS update_applications_updated_at ON applications;
DROP TRIGGER IF EXISTS update_inquiries_updated_at ON inquiries;
DROP FUNCTION IF EXISTS update_updated_at_column();
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS inquiries CASCADE;

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

-- 모든 사용자가 삽입 가능 (웹사이트 폼용)
CREATE POLICY "모든 사용자 신청서 삽입 가능" ON applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "모든 사용자 문의 삽입 가능" ON inquiries
  FOR INSERT WITH CHECK (true);

-- 인증된 사용자만 조회 가능 (관리자용)
CREATE POLICY "인증된 사용자 신청서 조회 가능" ON applications
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "인증된 사용자 문의 조회 가능" ON inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

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
