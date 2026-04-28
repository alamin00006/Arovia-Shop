import { z } from 'zod';
export const bannerSchema = z.object({ title: z.string().min(2), image: z.string().url(), link: z.string().url().optional(), position: z.string().optional(), isActive: z.boolean().default(true) });
