import { z } from 'zod';
export const loginSchema = z.object({ credential: z.string().min(3), password: z.string().min(6) });
export const registerSchema = z.object({ name: z.string().min(2), phone: z.string().min(8), email: z.string().email(), password: z.string().min(6) });
