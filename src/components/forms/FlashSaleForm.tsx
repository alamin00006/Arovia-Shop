'use client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const FlashSaleForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); const fd = new FormData(e.currentTarget); onSubmit(Object.fromEntries(fd.entries())); };
  return <form className='grid gap-3 md:grid-cols-2' onSubmit={submit}><Input name='name' placeholder='Campaign name' /><Input type='datetime-local' name='startsAt' /><Input type='datetime-local' name='endsAt' /><Input name='productId' placeholder='Product ID' /><Input type='number' name='discountPrice' placeholder='Discount price' /><Button type='submit'>Save Flash Sale</Button></form>;
};
