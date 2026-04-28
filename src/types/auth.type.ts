export interface User { id: string; name: string; email: string; phone: string; }
export interface AuthState { user: User | null; accessToken: string | null; isAuthenticated: boolean; }
