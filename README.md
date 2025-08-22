# ComfessionLab

Next.js + Supabase + TailwindCSS 기반의 웹사이트 프로젝트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Supabase
- **Code Quality**: ESLint, Prettier, Husky, Commitlint
- **Package Manager**: npm

## 📋 요구사항

- Node.js 18.18.0 이상
- npm 8.0.0 이상

## 🛠️ 설치 및 실행

### 1. 저장소 클론

```bash
git clone <repository-url>
cd comfessionlab
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

```bash
cp env.example .env.local
```

`.env.local` 파일을 열고 필요한 환경 변수들을 설정하세요:

```env
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# 이메일 서비스 설정 (선택사항)
# SENDGRID_API_KEY=your_sendgrid_api_key_here
# RESEND_API_KEY=your_resend_api_key_here
```

### 4. Supabase 데이터베이스 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트를 생성하세요
2. SQL Editor에서 `supabase-schema.sql` 파일의 내용을 실행하세요
3. Settings > API에서 URL과 anon key를 복사하여 환경 변수에 설정하세요

### 5. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📜 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 검사
- `npm run lint:fix` - ESLint 검사 및 자동 수정
- `npm run format` - Prettier로 코드 포맷팅
- `npm run format:check` - Prettier 포맷팅 검사
- `npm run type-check` - TypeScript 타입 검사

## 🏗️ 프로젝트 구조

```
comfessionlab/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # 재사용 가능한 컴포넌트
│   ├── lib/                 # 유틸리티 함수 및 설정
│   └── types/               # TypeScript 타입 정의
├── public/                  # 정적 파일
├── .husky/                  # Git hooks
├── .vscode/                 # VS Code 설정
└── docs/                    # 문서
```

## 🔧 개발 도구

### 코드 품질

- **ESLint**: 코드 품질 검사 및 규칙 적용
- **Prettier**: 코드 포맷팅
- **Husky**: Git hooks 관리
- **Commitlint**: 커밋 메시지 검증
- **Lint-staged**: 스테이징된 파일만 검사

### 커밋 메시지 규칙

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다:

```
type(scope): description

feat: 새로운 기능
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
perf: 성능 개선
test: 테스트 추가/수정
build: 빌드 시스템 변경
ci: CI 설정 변경
chore: 기타 변경사항
```

### VS Code 확장 프로그램

프로젝트에 포함된 `.vscode/extensions.json`을 참고하여 필요한 확장 프로그램을 설치하세요.

## 🚀 배포

### Vercel (권장)

1. [Vercel](https://vercel.com)에 계정 생성
2. GitHub 저장소 연결
3. 환경 변수 설정
4. 배포 완료

### 기타 플랫폼

- Netlify
- Railway
- AWS Amplify

## 📚 문서

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.
