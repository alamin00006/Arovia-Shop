import { UseFormRegister } from 'react-hook-form';
import { CheckoutInput } from '@/schemas/checkout.schema';

export const PaymentMethod = ({ register }: { register: UseFormRegister<CheckoutInput> }) => <div className='space-y-2'><label className='flex items-center gap-2 rounded border p-3'><input type='radio' value='COD' {...register('paymentMethod')} /> Cash on Delivery</label><label className='flex items-center gap-2 rounded border p-3'><input type='radio' value='ONLINE' {...register('paymentMethod')} /> Online Payment (placeholder)</label></div>;
