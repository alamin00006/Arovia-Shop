import { z } from 'zod';
export const couponSchema = z.object({ code: z.string().min(3), discountType: z.enum(['PERCENTAGE','FIXED']), discountValue: z.coerce.number().positive(), minimumOrder: z.coerce.number().min(0), startsAt: z.string(), endsAt: z.string(), usageLimit: z.coerce.number().optional(), isActive: z.boolean().default(true) });
