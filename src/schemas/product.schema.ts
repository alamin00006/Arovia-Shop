import { z } from 'zod';
export const productSchema = z.object({
  name: z.string().min(2), sku: z.string().min(2), categoryId: z.string().min(1), brandId: z.string().optional(),
  regularPrice: z.coerce.number().positive(), salePrice: z.coerce.number().optional(), stockQuantity: z.coerce.number().nonnegative(),
  unit: z.enum(['kg','gm','liter','ml','pcs']), status: z.enum(['PUBLISHED','DRAFT']), seoTitle: z.string().optional(), seoDescription: z.string().optional()
});
export type ProductFormValues = z.infer<typeof productSchema>;
