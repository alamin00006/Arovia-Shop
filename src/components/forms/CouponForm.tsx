'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { couponSchema } from '@/schemas/coupon.schema';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select } from '../ui/select';

export const CouponForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(couponSchema) });
  return (
    <form className='grid gap-3 md:grid-cols-2' onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder='Code' {...register('code')} />
      <Select {...register('discountType')}><option value='PERCENTAGE'>PERCENTAGE</option><option value='FIXED'>FIXED</option></Select>
      <Input type='number' placeholder='Discount value' {...register('discountValue')} />
      <Input type='number' placeholder='Minimum order' {...register('minimumOrder')} />
      <Input type='datetime-local' {...register('startsAt')} /><Input type='datetime-local' {...register('endsAt')} />
      <Button type='submit'>Save Coupon</Button>
    </form>
  );
};
