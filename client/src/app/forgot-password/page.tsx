'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ForgotPasswordPage() {
  return <main className='grid min-h-screen place-items-center p-4'><form className='w-full max-w-md space-y-3 rounded-xl border p-6' onSubmit={(e)=>{e.preventDefault();toast.success('Reset link sent')}}><h1 className='text-xl font-semibold'>Forgot Password</h1><Input type='email' placeholder='Your email' /><Button type='submit' className='w-full'>Send Reset Link</Button></form></main>;
}
