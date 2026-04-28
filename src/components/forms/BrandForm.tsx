'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { brandSchema } from '@/schemas/brand.schema';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const BrandForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(brandSchema) });
  return <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}><Input placeholder='Brand name' {...register('name')} /><Input placeholder='Logo URL' {...register('logo')} /><Button type='submit'>Save Brand</Button></form>;
};
