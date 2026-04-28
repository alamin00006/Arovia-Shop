'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { ProductForm } from '@/components/forms/ProductForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { toast } from 'sonner';

export default function CreateProductPage() {
  return <ProtectedRoute><AdminLayout><PageHeader title='Create Product' /><ProductForm onSubmit={() => toast.success('Product created')} /></AdminLayout></ProtectedRoute>;
}
