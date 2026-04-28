'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export const Newsletter = () => <section className='container mx-auto px-4 pb-12'><div className='rounded-2xl border bg-card p-6 md:p-8'><h3 className='mb-2 text-xl font-semibold'>Get weekly offers in your inbox</h3><form className='mt-4 flex flex-col gap-2 md:flex-row' onSubmit={(e)=>{e.preventDefault();toast.success('Subscribed to newsletter')}}><Input type='email' required placeholder='Enter your email' /><Button type='submit'>Subscribe</Button></form></div></section>;
