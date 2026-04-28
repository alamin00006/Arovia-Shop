'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { CouponForm } from '@/components/forms/CouponForm';
import { toast } from 'sonner';

export default function CouponsPage() { return <ProtectedRoute><AdminLayout><PageHeader title='Coupons' description='Create and manage discount coupons.' /><CouponForm onSubmit={() => toast.success('Coupon saved')} /></AdminLayout></ProtectedRoute>; }
