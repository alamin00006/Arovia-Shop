'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { FlashSaleForm } from '@/components/forms/FlashSaleForm';
import { toast } from 'sonner';

export default function FlashSalesPage() { return <ProtectedRoute><AdminLayout><PageHeader title='Flash Sales' description='Create campaigns with time-bound product discount.' /><FlashSaleForm onSubmit={() => toast.success('Flash sale saved')} /></AdminLayout></ProtectedRoute>; }
