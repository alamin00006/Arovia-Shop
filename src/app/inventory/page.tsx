'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { ManagementPage } from '@/components/shared/ManagementPage';

export default function InventoryPage() { return <ProtectedRoute><AdminLayout><ManagementPage title='Inventory' description='Track stock and low-stock alerts.' rows={[{ product: 'Premium Apple', stock: 12, alert: 'LOW' }]} columns={[{ key: 'product', title: 'Product' }, { key: 'stock', title: 'Stock' }, { key: 'alert', title: 'Alert' }]} /></AdminLayout></ProtectedRoute>; }
