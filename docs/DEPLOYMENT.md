# 🚀 Vercel 배포 가이드

## 자동 배포 설정

이 프로젝트는 Vercel에서 자동으로 Next.js 프로젝트로 인식됩니다.

### 1. Vercel 계정 생성

- [Vercel](https://vercel.com)에 가입
- GitHub 계정으로 로그인

### 2. 프로젝트 연결

1. Vercel 대시보드에서 "New Project" 클릭
2. GitHub 저장소 선택
3. 프로젝트 설정 확인:
   - **Framework Preset**: Next.js (자동 감지)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 감지)
   - **Output Directory**: `.next` (자동 감지)

### 3. 환경 변수 설정

Vercel 대시보드에서 다음 환경 변수들을 설정하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### 4. 배포

- "Deploy" 버튼 클릭
- 배포 완료 후 제공되는 URL로 접속

## 배포 후 확인사항

### ✅ 자동 감지 확인

- Vercel이 자동으로 Next.js 프로젝트로 인식
- `vercel.json` 설정 적용
- 빌드 및 배포 성공

### 🔧 추가 설정 (선택사항)

#### 커스텀 도메인

1. Vercel 프로젝트 설정 → Domains
2. 도메인 추가 및 DNS 설정

#### 환경별 배포

- Production: `main` 브랜치
- Preview: PR 생성 시 자동 배포
- Development: `develop` 브랜치 (선택사항)

## 문제 해결

### 빌드 실패

1. 로컬에서 `npm run build` 테스트
2. 환경 변수 확인
3. 의존성 문제 확인

### 환경 변수 문제

1. Vercel 대시보드에서 환경 변수 재설정
2. `NEXT_PUBLIC_` 접두사 확인
3. 배포 후 재시도

### 성능 최적화

- 이미지 최적화 확인
- 번들 크기 분석
- Core Web Vitals 모니터링

## 유용한 링크

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://nextjs.org/docs/deployment#vercel-recommended)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
