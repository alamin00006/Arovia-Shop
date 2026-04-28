'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { bannerSchema } from '@/schemas/banner.schema';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const BannerForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(bannerSchema) });
  return <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}><Input placeholder='Title' {...register('title')} /><Input placeholder='Image URL' {...register('image')} /><Input placeholder='Link URL' {...register('link')} /><Button type='submit'>Save Banner</Button></form>;
};
