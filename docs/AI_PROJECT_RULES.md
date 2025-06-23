# 🤖 AI 프로젝트 Rule 셋

이 문서는 AI 프로젝트에서 일반적으로 사용되는 개발 규칙과 가이드라인을 정리한 것입니다.

## 📋 목차

1. [코드 스타일](#코드-스타일)
2. [네이밍 컨벤션](#네이밍-컨벤션)
3. [컴포넌트 구조](#컴포넌트-구조)
4. [상태 관리](#상태-관리)
5. [API 설계](#api-설계)
6. [에러 처리](#에러-처리)
7. [성능 최적화](#성능-최적화)
8. [보안](#보안)
9. [테스트](#테스트)
10. [문서화](#문서화)

## 🎨 코드 스타일

### TypeScript 규칙

```typescript
// ✅ 좋은 예
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

type UserStatus = 'active' | 'inactive' | 'pending';

const getUserById = async (id: string): Promise<User | null> => {
  // 구현
};

// ❌ 나쁜 예
interface user {
  ID: string;
  Name: string;
  Email: string;
  created_at: Date;
}

const getUserById = async (id: string) => {
  // 구현
};
```

### React 컴포넌트 규칙

```typescript
// ✅ 좋은 예
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}) => {
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

// ❌ 나쁜 예
export const Button = (props: any) => {
  return <button {...props} />;
};
```

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

```typescript
// Button/Button.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  // Props 정의
}

export const Button: React.FC<ButtonProps> = ({ ... }) => {
  // 컴포넌트 로직
};

// Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

### 컴포넌트 분리 원칙

1. **단일 책임 원칙**: 하나의 컴포넌트는 하나의 책임만 가져야 함
2. **재사용성**: 가능한 한 재사용 가능하게 설계
3. **합성**: 상속보다는 합성을 우선
4. **불변성**: Props는 불변해야 함

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

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  isLoading: false,
  error: null,
  setUser: user => set({ user }),
  setLoading: isLoading => set({ isLoading }),
  setError: error => set({ error }),
}));
```

## 🌐 API 설계

### API 함수 구조

```typescript
// lib/api/users.ts
import { supabase } from '@/lib/supabase';

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
}

export const userApi = {
  // 사용자 목록 조회
  getUsers: async (): Promise<User[]> => {
    const { data, error } = await supabase.from('users').select('*');

    if (error) throw new Error(error.message);
    return data;
  },

  // 사용자 생성
  createUser: async (userData: CreateUserData): Promise<User> => {
    const { data, error } = await supabase
      .from('users')
      .insert(userData)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  },

  // 사용자 수정
  updateUser: async (id: string, userData: UpdateUserData): Promise<User> => {
    const { data, error } = await supabase
      .from('users')
      .update(userData)
      .eq('id', id)
      .select()
      .single();

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
import { useState, useEffect } from 'react';
import { userApi } from '@/lib/api/users';

export const useUsers = () => {
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
      setError(
        err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.'
      );
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

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

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
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleApiError = (error: unknown): string => {
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
export const UserCard = React.memo<UserCardProps>(({ user, onEdit }) => {
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
const UserList: React.FC<UserListProps> = ({ users, onUserSelect }) => {
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

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 40 }) => {
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
  name: z
    .string()
    .min(1, '이름을 입력해주세요.')
    .max(50, '이름은 50자 이하여야 합니다.'),
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
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
};

// ❌ 나쁜 예
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
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
import { userApi } from './users';
import { supabase } from '@/lib/supabase';

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

<Button variant='primary' onClick={handleClick}>
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
