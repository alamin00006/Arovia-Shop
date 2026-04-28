import { z } from 'zod';
export const addressSchema = z.object({ label: z.string().min(2), line1: z.string().min(5), city: z.string().min(2), phone: z.string().min(8) });
