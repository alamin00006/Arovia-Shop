'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { BundleForm } from '@/components/forms/BundleForm';
import { toast } from 'sonner';

export default function BundlesPage() { return <ProtectedRoute><AdminLayout><PageHeader title='Bundles' description='Configure frequently bought together bundles.' /><BundleForm onSubmit={() => toast.success('Bundle saved')} /></AdminLayout></ProtectedRoute>; }
