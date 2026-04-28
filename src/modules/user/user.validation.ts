import { z } from 'zod';

export const addressSchema = z.object({
  label: z.string().min(2),
  recipientName: z.string().min(2),
  phone: z.string().min(8),
  line1: z.string().min(3),
  line2: z.string().optional(),
  city: z.string().min(2),
  zone: z.string().min(2),
  postalCode: z.string().optional(),
  isDefault: z.boolean().optional()
});
