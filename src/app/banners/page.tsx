'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { BannerForm } from '@/components/forms/BannerForm';
import { toast } from 'sonner';

export default function BannersPage() { return <ProtectedRoute><AdminLayout><PageHeader title='Banners' description='Homepage and promotional banners.' /><BannerForm onSubmit={() => toast.success('Banner saved')} /></AdminLayout></ProtectedRoute>; }
