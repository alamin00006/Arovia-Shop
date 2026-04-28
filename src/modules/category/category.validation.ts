import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z.string().min(2),
  parentId: z.string().optional(),
  image: z.string().url().optional(),
  icon: z.string().optional(),
  isActive: z.boolean().optional()
});
