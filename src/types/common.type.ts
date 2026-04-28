export interface ApiResponse<T> { success: boolean; message: string; data: T; meta?: { page: number; limit: number; total: number }; }
export interface QueryParams { page?: number; limit?: number; search?: string; sortBy?: string; sortOrder?: 'asc'|'desc'; [key: string]: any; }
