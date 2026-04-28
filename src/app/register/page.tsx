'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas/auth.schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(registerSchema) });
  return <main className='grid min-h-screen place-items-center p-4'><form className='w-full max-w-md space-y-3 rounded-xl border p-6' onSubmit={handleSubmit(()=>toast.success('Registration successful'))}><h1 className='text-xl font-semibold'>Create Account</h1><Input placeholder='Full name' {...register('name')} /><Input placeholder='Phone' {...register('phone')} /><Input placeholder='Email' {...register('email')} /><Input type='password' placeholder='Password' {...register('password')} /><Button type='submit' className='w-full'>Register</Button><Link href='/login' className='text-sm'>Already have an account? Login</Link></form></main>;
}
