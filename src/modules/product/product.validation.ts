import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(2),
  sku: z.string().min(2),
  categoryId: z.string(),
  subcategoryId: z.string().optional(),
  brandId: z.string().optional(),
  shortDescription: z.string().optional(),
  fullDescription: z.string().optional(),
  regularPrice: z.number().positive(),
  salePrice: z.number().positive().optional(),
  stockQuantity: z.number().int().nonnegative(),
  unit: z.enum(['kg', 'gm', 'liter', 'pcs']),
  tags: z.array(z.string()).optional(),
  badges: z.array(z.enum(['BEST_SELLING', 'NEW_ARRIVAL', 'OFFERED', 'FLASH_SALE'])).optional(),
  featured: z.boolean().optional(),
  status: z.enum(['PUBLISHED', 'DRAFT']).optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
});
