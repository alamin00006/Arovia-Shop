import { z } from 'zod';
export const checkoutSchema = z.object({ name: z.string().min(2), phone: z.string().min(8), address: z.string().min(5), city: z.string().min(2), deliveryArea: z.string().min(1), paymentMethod: z.enum(['COD','ONLINE']) });
export type CheckoutPayload = z.infer<typeof checkoutSchema>;
