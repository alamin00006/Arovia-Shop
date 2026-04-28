'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { productSchema, ProductFormValues } from '@/schemas/product.schema';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Textarea } from '../ui/textarea';

export const ProductForm = ({ defaultValues, onSubmit }: { defaultValues?: Partial<ProductFormValues>; onSubmit: (value: ProductFormValues) => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormValues>({ resolver: zodResolver(productSchema), defaultValues: defaultValues as any });

  return (
    <form className='grid gap-4 md:grid-cols-2' onSubmit={handleSubmit(onSubmit)}>
      <div><Input placeholder='Product Name' {...register('name')} />{errors.name && <p className='text-xs text-red-500'>{errors.name.message}</p>}</div>
      <Input placeholder='SKU' {...register('sku')} />
      <Input placeholder='Category ID' {...register('categoryId')} />
      <Input placeholder='Brand ID (optional)' {...register('brandId')} />
      <Input type='number' step='0.01' placeholder='Regular Price' {...register('regularPrice')} />
      <Input type='number' step='0.01' placeholder='Sale Price' {...register('salePrice')} />
      <Input type='number' placeholder='Stock Quantity' {...register('stockQuantity')} />
      <Select {...register('unit')}>
        <option value='kg'>kg</option><option value='gm'>gm</option><option value='liter'>liter</option><option value='ml'>ml</option><option value='pcs'>pcs</option>
      </Select>
      <Select {...register('status')}><option value='PUBLISHED'>PUBLISHED</option><option value='DRAFT'>DRAFT</option></Select>
      <Input placeholder='SEO title' {...register('seoTitle')} className='md:col-span-2' />
      <Textarea placeholder='SEO description' {...register('seoDescription')} className='md:col-span-2' />
      <div className='md:col-span-2'><Button type='submit'>Save Product</Button></div>
    </form>
  );
};
