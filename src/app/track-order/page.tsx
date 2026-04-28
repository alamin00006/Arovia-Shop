'use client';
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const timeline = ['PENDING','CONFIRMED','PROCESSING','SHIPPED','DELIVERED'];

export default function TrackOrderPage() {
  const [search, setSearch] = useState('');
  return <><Header /><main className='container mx-auto px-4 py-6'><h1 className='mb-4 text-2xl font-semibold'>Track Order</h1><div className='mb-6 flex gap-2'><Input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Order number or phone' /><Button>Track</Button></div><div className='rounded-xl border p-4'><p className='mb-4 text-sm'>Order: ORD-9001 | Payment: UNPAID</p><div className='space-y-2'>{timeline.map((t,idx)=><div key={t} className='flex items-center gap-2 text-sm'><span className={`h-2 w-2 rounded-full ${idx<=2?'bg-green-500':'bg-muted'}`} />{t}</div>)}</div></div></main><Footer /></>;
}
