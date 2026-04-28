'use client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const BundleForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); const fd = new FormData(e.currentTarget); onSubmit(Object.fromEntries(fd.entries())); };
  return <form className='grid gap-3 md:grid-cols-2' onSubmit={submit}><Input name='name' placeholder='Bundle name' /><Input name='mainProductId' placeholder='Main product ID' /><Input name='bundleProductIds' placeholder='Bundle product IDs (comma)' /><Input type='number' name='discountValue' placeholder='Discount value' /><Button type='submit'>Save Bundle</Button></form>;
};
