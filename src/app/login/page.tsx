'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas/auth.schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth } from '@/redux/features/auth/authSlice';
import { toast } from 'sonner';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({ resolver: zodResolver(loginSchema) });
  return <main className='grid min-h-screen place-items-center p-4'><form className='w-full max-w-md space-y-3 rounded-xl border p-6' onSubmit={handleSubmit((v:any)=>{dispatch(setAuth({user:{id:'u1',name:'Customer',email:'customer@mail.com',phone:'017',role:'CUSTOMER'},accessToken:'token'}));toast.success('Login successful');})}><h1 className='text-xl font-semibold'>Login</h1><Input placeholder='Phone or email' {...register('credential')} /><Input type='password' placeholder='Password' {...register('password')} /><Button type='submit' className='w-full'>Login</Button><div className='flex justify-between text-sm'><Link href='/forgot-password'>Forgot password?</Link><Link href='/register'>Register</Link></div><p className='text-xs text-muted-foreground'>OTP login placeholder available for future.</p></form></main>;
}
