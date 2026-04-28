'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const ProfileForm = () => <form className='space-y-3 rounded-xl border p-4' onSubmit={(e)=>{e.preventDefault();toast.success('Profile updated')}}><Input defaultValue='Customer Name' /><Input defaultValue='0170000000' /><Input defaultValue='customer@example.com' /><Button type='submit'>Update Profile</Button></form>;
