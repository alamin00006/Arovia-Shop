'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { categorySchema } from '@/schemas/category.schema';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const CategoryForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(categorySchema) });
  return <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}><Input placeholder='Category name' {...register('name')} /><Input placeholder='Parent category ID (optional)' {...register('parentId')} /><Button type='submit'>Save Category</Button></form>;
};
