'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { ManagementPage } from '@/components/shared/ManagementPage';

export default function ReviewsPage() { return <ProtectedRoute><AdminLayout><ManagementPage title='Reviews' description='Approve/reject customer reviews.' rows={[{ product: 'Premium Apple', rating: 5, status: 'PENDING' }]} columns={[{ key: 'product', title: 'Product' }, { key: 'rating', title: 'Rating' }, { key: 'status', title: 'Status' }]} /></AdminLayout></ProtectedRoute>; }
