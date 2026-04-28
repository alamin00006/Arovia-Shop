'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { ProductForm } from '@/components/forms/ProductForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { toast } from 'sonner';

export default function EditProductPage() {
  return <ProtectedRoute><AdminLayout><PageHeader title='Edit Product' /><ProductForm defaultValues={{ name: 'Premium Apple', sku: 'APL-001', categoryId: 'cat1', regularPrice: 200, stockQuantity: 50, unit: 'kg', status: 'PUBLISHED' }} onSubmit={() => toast.success('Product updated')} /></AdminLayout></ProtectedRoute>;
}
