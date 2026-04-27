// Auth helpers
export const AUTH_KEY = 'blog-auth' as const;

export interface User {
  id: string;
  email: string;
}

export const getAuthFromStorage = (): User | null => {
  if (typeof window === 'undefined') return null;
  const str = localStorage.getItem(AUTH_KEY);
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
};

export const setAuthToStorage = (user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  }
};

export const clearAuthStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_KEY);
  }
};

