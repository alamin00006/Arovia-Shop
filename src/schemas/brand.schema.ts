import { z } from 'zod';
export const brandSchema = z.object({ name: z.string().min(2), logo: z.string().url().optional(), isActive: z.boolean().default(true) });
