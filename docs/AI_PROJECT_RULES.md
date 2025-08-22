# 🤖 AI 프로젝트 Rule 셋

이 문서는 AI 프로젝트에서 일반적으로 사용되는 개발 규칙과 가이드라인을 정리한 것입니다.

## 📋 목차

1. [기술 스택](#기술-스택)
2. [코드 스타일](#코드-스타일)
3. [네이밍 컨벤션](#네이밍-컨벤션)
4. [컴포넌트 구조](#컴포넌트-구조)
5. [상태 관리](#상태-관리)
6. [API 설계](#api-설계)
7. [에러 처리](#에러-처리)
8. [성능 최적화](#성능-최적화)
9. [보안](#보안)
10. [테스트](#테스트)
11. [문서화](#문서화)

## 🛠️ 기술 스택

### 프레임워크 & 런타임

- **Next.js 15.3.4** - React 기반 풀스택 프레임워크 (App Router)
- **React 19.0.0** - 사용자 인터페이스 라이브러리
- **TypeScript 5** - 정적 타입 검사

### 스타일링

- **Tailwind CSS 4** - 유틸리티 퍼스트 CSS 프레임워크
- **class-variance-authority** - 컴포넌트 변형 관리
- **clsx** - 조건부 클래스명 유틸리티
- **tailwind-merge** - Tailwind 클래스 병합

### UI 컴포넌트

- **shadcn/ui** - 재사용 가능한 UI 컴포넌트 라이브러리
- **Radix UI** - 접근성 중심의 헤드리스 UI 컴포넌트
  - `@radix-ui/react-label`
  - `@radix-ui/react-select`
  - `@radix-ui/react-slot`
- **Lucide React** - 아이콘 라이브러리

### 폼 관리 & 검증

- **React Hook Form 7.62.0** - 고성능 폼 라이브러리
- **@hookform/resolvers** - React Hook Form 리졸버
- **Zod 4.0.17** - TypeScript 우선 스키마 검증

### 백엔드 & 데이터베이스

- **Supabase** - 오픈소스 Firebase 대안
  - `@supabase/supabase-js` - Supabase 클라이언트

### 개발 도구

- **ESLint 9** - 코드 품질 검사
- **Prettier 3.6.0** - 코드 포맷터
- **eslint-config-prettier** - ESLint-Prettier 통합
- **eslint-plugin-import** - import/export 규칙
- **eslint-plugin-prettier** - Prettier ESLint 규칙
- **eslint-plugin-unused-imports** - 미사용 import 제거

### 애니메이션

- **tw-animate-css** - Tailwind CSS 애니메이션

### 프로젝트 구조

```
compassionlab/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About 페이지
│   │   ├── programs/          # 프로그램 페이지
│   │   ├── philosophy/        # 교육 철학 페이지
│   │   ├── contact/           # 문의 페이지
│   │   ├── globals.css        # 전역 스타일
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   └── page.tsx           # 메인 페이지
│   ├── components/
│   │   ├── ui/                # shadcn/ui 컴포넌트
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── label.tsx
│   │   │   └── form.tsx
│   │   ├── Navigation.tsx     # 네비게이션 컴포넌트
│   │   └── Section.tsx        # 섹션 컴포넌트
│   └── lib/
│       ├── supabase.ts        # Supabase 클라이언트
│       ├── utils.ts           # 유틸리티 함수
│       ├── colors.ts          # 브랜드 색상
│       └── typography.ts      # 타이포그래피
├── public/                    # 정적 파일
├── docs/                      # 프로젝트 문서
└── supabase/
    └── schema/                # Database schema
        └── public.schema.sql  # public schema
```

### 환경 변수

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# 이메일 서비스 (선택사항)
SENDGRID_API_KEY=your_sendgrid_api_key
RESEND_API_KEY=your_resend_api_key
```

### shadcn/ui 사용 규칙

#### 컴포넌트 추가

```bash
# 새 컴포넌트 추가
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add label
npx shadcn@latest add form
```

#### 컴포넌트 사용법

```typescript
// ✅ 좋은 예 - shadcn/ui 컴포넌트 사용 (클라이언트 컴포넌트)
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const UserCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>사용자 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="이름을 입력하세요" />
        <Button>저장</Button>
      </CardContent>
    </Card>
  );
};

// ✅ 좋은 예 - 서버 컴포넌트에서 shadcn/ui 사용
// app/users/page.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UsersPage() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <p>사용자 정보...</p>
          <Button>새 사용자 추가</Button>
        </CardContent>
      </Card>
    </div>
  );
}

// ❌ 나쁜 예 - variant prop 사용 (shadcn/ui Card는 variant 지원 안함)
<Card variant="elevated">  // 이렇게 하면 안됨
  <div>내용</div>
</Card>
```

#### 폼 컴포넌트 사용법

```typescript
// React Hook Form + Zod + shadcn/ui 통합
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  email: z.string().email('올바른 이메일 형식이 아닙니다'),
});

export const UserForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">제출</Button>
      </form>
    </Form>
  );
};
```

### Supabase 사용 규칙

#### 클라이언트 설정

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

#### 데이터베이스 함수 작성

```typescript
// lib/api/forms.ts
import { supabase } from '@/lib/supabase';

export type ApplicationFormData = {
  name: string;
  email: string;
  phone: string;
  age: number;
  program: string;
  message?: string;
  preferred_contact: 'email' | 'phone';
  agree_to_terms: boolean;
};

export const saveApplicationForm = async (data: ApplicationFormData) => {
  const { data: result, error } = await supabase.from('applications').insert([data]).select();

  if (error) {
    throw new Error(`신청서 저장 중 오류가 발생했습니다: ${error.message}`);
  }

  return result;
};
```

### Tailwind CSS 사용 규칙

#### 브랜드 색상 사용

```typescript
// lib/colors.ts
export const colors = {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  secondary: {
    50: '#f8fafc',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
  },
};

// 사용 예시
<div className="bg-primary-600 text-white">
  브랜드 색상 사용
</div>
```

#### 반응형 디자인

```typescript
// ✅ 좋은 예
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card className="p-4 md:p-6">
    <h3 className="text-lg md:text-xl font-semibold">제목</h3>
    <p className="text-sm md:text-base">내용</p>
  </Card>
</div>

// ❌ 나쁜 예 - 고정 크기 사용
<div className="grid grid-cols-3 gap-4">
  <Card className="p-6">
    <h3 className="text-xl font-semibold">제목</h3>
    <p className="text-base">내용</p>
  </Card>
</div>
```

## 🎨 코드 스타일

### TypeScript 규칙

#### 타입 선언 규칙

```typescript
// ✅ 좋은 예 - type 사용 (일반적인 타입 정의)
type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

type UserStatus = 'active' | 'inactive' | 'pending';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
};

type ApiResponse<T> = {
  data: T;
  error: string | null;
  success: boolean;
};

// ✅ 좋은 예 - interface 사용 (OOP 개념의 인터페이스)
interface UserService {
  getUserById(id: string): Promise<User | null>;
  createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<User>;
  updateUser(id: string, user: Partial<User>): Promise<User>;
  deleteUser(id: string): Promise<void>;
}

interface DatabaseConnection {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  query<T>(sql: string, params?: any[]): Promise<T[]>;
}

interface EventHandler {
  handle(event: Event): void;
  canHandle(event: Event): boolean;
}

// ❌ 나쁜 예 - interface를 일반 타입 정의에 사용
interface User {
  id: string;
  name: string;
  email: string;
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

// ❌ 나쁜 예 - 잘못된 네이밍
type user = {
  ID: string;
  Name: string;
  Email: string;
  created_at: Date;
};

const getUserById = async (id: string): Promise<User | null> => {
  // 구현
};
```

### React 컴포넌트 규칙

#### 클라이언트 컴포넌트 (이름있는 화살표 함수 사용)

```typescript
// ✅ 좋은 예 - 클라이언트 컴포넌트 (내부 사용)
'use client';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}: Props) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// ✅ 좋은 예 - 상태가 있는 클라이언트 컴포넌트 (내부 사용)
'use client';

type Props = {
  initialValue?: number;
};

export const Counter = ({ initialValue = 0 }: Props) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="flex items-center gap-4">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

// ✅ 좋은 예 - Props export가 필요한 경우
'use client';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

// ❌ 나쁜 예 - 함수 선언식 사용
export function Button(props: any) {
return <button {...props} />;
}

// ❌ 나쁜 예 - 익명 함수 사용
export const Button = (props: any) => {
return <button {...props} />;
};

````

#### 서버 컴포넌트 (page.tsx 파일만)

```typescript
// ✅ 좋은 예 - 서버 컴포넌트 (page.tsx)
// app/about/page.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <Card>
        <CardHeader>
          <CardTitle>회사 소개</CardTitle>
        </CardHeader>
        <CardContent>
          <p>회사에 대한 설명...</p>
          <Button>자세히 보기</Button>
        </CardContent>
      </Card>
    </div>
  );
}

// ✅ 좋은 예 - 서버 컴포넌트에서 데이터 페칭
// app/programs/page.tsx
import { getPrograms } from '@/lib/api/programs';

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">프로그램</h1>
      <div className="grid gap-4">
        {programs.map(program => (
          <div key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ❌ 나쁜 예 - 서버 컴포넌트에서 클라이언트 기능 사용
export default function Page() {
  const [state, setState] = useState(); // ❌ useState는 클라이언트에서만 사용 가능
  const handleClick = () => {}; // ❌ 이벤트 핸들러는 클라이언트에서만 사용 가능

  return <div>...</div>;
}
````

## 🏷️ 네이밍 컨벤션

### 파일 및 폴더

```
src/
├── components/
│   ├── ui/                    # 기본 UI 컴포넌트
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   └── Input/
│   ├── features/              # 기능별 컴포넌트
│   │   ├── auth/
│   │   └── dashboard/
│   └── layouts/               # 레이아웃 컴포넌트
├── hooks/                     # 커스텀 훅
├── lib/                       # 유틸리티 함수
├── types/                     # 타입 정의
└── constants/                 # 상수
```

### 변수 및 함수

```typescript
// ✅ 좋은 예
const userList = [];
const isLoading = true;
const handleSubmit = () => {};
const fetchUserData = async () => {};

// ❌ 나쁜 예
const user_list = [];
const loading = true;
const submit = () => {};
const getData = async () => {};
```

## 🧩 컴포넌트 구조

### 컴포넌트 파일 구조

#### 클라이언트 컴포넌트 구조

```typescript
// components/ui/Button.tsx
'use client';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className,
  ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'danger',
        },
        {
          'h-9 px-3': size === 'sm',
          'h-10 px-4 py-2': size === 'md',
          'h-11 px-8': size === 'lg',
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
```

#### 서버 컴포넌트 구조 (page.tsx)

```typescript
// app/about/page.tsx
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <Card>
        <CardHeader>
          <CardTitle>회사 소개</CardTitle>
        </CardHeader>
        <CardContent>
          <p>회사에 대한 설명...</p>
          <Button>자세히 보기</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

#### 컴포넌트 분리 원칙

1. **클라이언트/서버 분리**:
   - 클라이언트 컴포넌트: `'use client'` 지시어 사용, 상태나 이벤트 핸들러 필요
   - 서버 컴포넌트: page.tsx 파일만, 데이터 페칭이나 정적 렌더링

2. **단일 책임 원칙**: 하나의 컴포넌트는 하나의 책임만 가져야 함

3. **재사용성**: 가능한 한 재사용 가능하게 설계

4. **합성**: 상속보다는 합성을 우선

5. **불변성**: Props는 불변해야 함

## 🔄 상태 관리

### 로컬 상태

```typescript
// ✅ 좋은 예
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [data, setData] = useState<User[]>([]);

// ❌ 나쁜 예
const [state, setState] = useState({
  isLoading: false,
  error: null,
  data: [],
});
```

### 전역 상태 (Zustand 예시)

```typescript
// stores/userStore.ts
import { create } from 'zustand';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

type UserState = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
```

## 🌐 API 설계

### API 함수 구조

```typescript
// lib/api/users.ts
import { supabase } from '@/lib/supabase';

export type CreateUserData = {
  name: string;
  email: string;
  password: string;
};

export type UpdateUserData = {
  name?: string;
  email?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export const userApi = {
  // 사용자 목록 조회
  getUsers: async (): Promise<User[]> => {
    const { data, error } = await supabase.from('users').select('*');

    if (error) throw new Error(error.message);
    return data;
  },

  // 사용자 생성
  createUser: async (userData: CreateUserData): Promise<User> => {
    const { data, error } = await supabase.from('users').insert(userData).select().single();

    if (error) throw new Error(error.message);
    return data;
  },

  // 사용자 수정
  updateUser: async (id: string, userData: UpdateUserData): Promise<User> => {
    const { data, error } = await supabase.from('users').update(userData).eq('id', id).select().single();

    if (error) throw new Error(error.message);
    return data;
  },

  // 사용자 삭제
  deleteUser: async (id: string): Promise<void> => {
    const { error } = await supabase.from('users').delete().eq('id', id);

    if (error) throw new Error(error.message);
  },
};
```

### 커스텀 훅

```typescript
// hooks/useUsers.ts
import { useEffect, useState } from 'react';

import { userApi } from '@/lib/api/users';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

type UseUsersReturn = {
  users: User[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

export const useUsers = (): UseUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await userApi.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    isLoading,
    error,
    refetch: fetchUsers,
  };
};
```

## ⚠️ 에러 처리

### 에러 바운더리

```typescript
// components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>문제가 발생했습니다.</h2>
          <p>페이지를 새로고침해주세요.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### API 에러 처리

```typescript
// lib/errorHandler.ts
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code?: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

type ErrorHandler = (error: unknown) => string;

export const handleApiError: ErrorHandler = (error) => {
  if (error instanceof ApiError) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return '알 수 없는 오류가 발생했습니다.';
};
```

## ⚡ 성능 최적화

### React.memo 사용

```typescript
// ✅ 좋은 예
type Props = {
  user: User;
  onEdit: (id: string) => void;
};

export const UserCard = React.memo<Props>(({ user, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>수정</button>
    </div>
  );
});

UserCard.displayName = 'UserCard';
```

### useMemo와 useCallback

```typescript
// ✅ 좋은 예
type Props = {
  users: User[];
  onUserSelect: (userId: string) => void;
};

const UserList = ({ users, onUserSelect }: Props) => {
  const sortedUsers = useMemo(() => {
    return users.sort((a, b) => a.name.localeCompare(b.name));
  }, [users]);

  const handleUserSelect = useCallback((userId: string) => {
    onUserSelect(userId);
  }, [onUserSelect]);

  return (
    <div>
      {sortedUsers.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onSelect={handleUserSelect}
        />
      ))}
    </div>
  );
};
```

### 이미지 최적화

```typescript
// ✅ 좋은 예
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  size?: number;
};

export const Avatar = ({ src, alt, size = 40 }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full"
      priority={false}
    />
  );
};
```

## 🔒 보안

### 입력 검증

```typescript
// lib/validation.ts
import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.').max(50, '이름은 50자 이하여야 합니다.'),
  email: z.string().email('올바른 이메일 형식이 아닙니다.'),
  password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
});

export type UserFormData = z.infer<typeof userSchema>;

// 사용 예시
const validateUserData = (data: unknown): UserFormData => {
  return userSchema.parse(data);
};
```

### XSS 방지

```typescript
// ✅ 좋은 예
type Props = {
  user: User;
};

const UserProfile = ({ user }: Props) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
};

// ❌ 나쁜 예
const UserProfile = ({ user }: Props) => {
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: user.name }} />
      <p dangerouslySetInnerHTML={{ __html: user.bio }} />
    </div>
  );
};
```

## 🧪 테스트

### 컴포넌트 테스트

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

### API 테스트

```typescript
// api/users.test.ts
import { supabase } from '@/lib/supabase';

import { userApi } from './users';

jest.mock('@/lib/supabase');

describe('userApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches users successfully', async () => {
    const mockUsers = [{ id: '1', name: 'John', email: 'john@example.com' }];

    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn().mockResolvedValue({
        data: mockUsers,
        error: null,
      }),
    });

    const result = await userApi.getUsers();
    expect(result).toEqual(mockUsers);
  });

  it('throws error when API call fails', async () => {
    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn().mockResolvedValue({
        data: null,
        error: { message: 'Database error' },
      }),
    });

    await expect(userApi.getUsers()).rejects.toThrow('Database error');
  });
});
```

## 📚 문서화

### JSDoc 주석

````typescript
/**
 * 사용자 정보를 가져오는 함수
 * @param id - 사용자 ID
 * @returns 사용자 정보 또는 null
 * @throws {Error} 사용자를 찾을 수 없는 경우
 * @example
 * ```typescript
 * const user = await getUserById('123');
 * if (user) {
 *   console.log(user.name);
 * }
 * ```
 */
export const getUserById = async (id: string): Promise<User | null> => {
  // 구현
};
````

### README 작성 가이드

````markdown
# 컴포넌트명

## 개요

컴포넌트의 목적과 기능을 간단히 설명

## Props

| Prop     | Type                     | Default   | Description |
| -------- | ------------------------ | --------- | ----------- |
| children | ReactNode                | -         | 자식 요소   |
| variant  | 'primary' \| 'secondary' | 'primary' | 버튼 스타일 |

## 사용 예시

```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" onClick={handleClick}>
  클릭하세요
</Button>;
```
````

## 주의사항

- 특별한 사용 시 주의사항
- 제한사항

```

## 📋 체크리스트

### 개발 시작 전
- [ ] 요구사항 분석 완료
- [ ] 기술 스택 결정
- [ ] 프로젝트 구조 설계
- [ ] 개발 환경 설정

### 개발 중
- [ ] 코드 스타일 가이드 준수
- [ ] 타입 안전성 확보
- [ ] 에러 처리 구현
- [ ] 성능 최적화 고려
- [ ] 보안 사항 검토

### 개발 완료 후
- [ ] 코드 리뷰 완료
- [ ] 테스트 작성 및 통과
- [ ] 문서 업데이트
- [ ] 배포 준비

---

이 문서는 지속적으로 업데이트됩니다. 팀의 요구사항에 맞게 수정하여 사용하세요.
```
