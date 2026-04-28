'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { BrandForm } from '@/components/forms/BrandForm';
import { toast } from 'sonner';

export default function BrandsPage() { return <ProtectedRoute><AdminLayout><PageHeader title='Brands' description='Manage brand records and logos' /><BrandForm onSubmit={() => toast.success('Brand saved')} /></AdminLayout></ProtectedRoute>; }
