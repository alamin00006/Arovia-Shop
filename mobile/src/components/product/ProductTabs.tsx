'use client';
import { useState } from 'react';

export const ProductTabs = () => {
  const [tab, setTab] = useState<'description'|'video'|'reviews'>('description');
  return <div className='mt-8 rounded-xl border p-4'><div className='mb-4 flex gap-2'>{['description','video','reviews'].map((t)=><button key={t} onClick={()=>setTab(t as any)} className={`rounded px-3 py-1 text-sm ${tab===t?'bg-primary text-white':'bg-muted'}`}>{t}</button>)}</div>{tab==='description'&&<p className='text-sm text-muted-foreground'>Fresh and premium quality product with reliable sourcing.</p>}{tab==='video'&&<p className='text-sm text-muted-foreground'>Product video placeholder.</p>}{tab==='reviews'&&<p className='text-sm text-muted-foreground'>Customer reviews placeholder.</p>}</div>;
};
