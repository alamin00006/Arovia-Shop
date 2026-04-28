import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  password: z.string().min(6)
});

export const loginSchema = z.object({
  credential: z.string().min(3),
  password: z.string().min(6)
});

export const refreshTokenSchema = z.object({ refreshToken: z.string().min(10) });
export const forgotPasswordSchema = z.object({ email: z.string().email() });
