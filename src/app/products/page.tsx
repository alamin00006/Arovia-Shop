'use client';

import Link from 'next/link';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { ManagementPage } from '@/components/shared/ManagementPage';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/shared/StatusBadge';

const rows = [
  { id: 'p1', name: 'Premium Apple', sku: 'APL-001', stockQuantity: 120, status: 'PUBLISHED' },
  { id: 'p2', name: 'Organic Carrot', sku: 'VEG-001', stockQuantity: 18, status: 'DRAFT' }
];

export default function ProductsPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <ManagementPage
          title='Products'
          description='Manage products with search, filter, sort and pagination.'
          rows={rows}
          columns={[
            { key: 'name', title: 'Name' },
            { key: 'sku', title: 'SKU' },
            { key: 'stockQuantity', title: 'Stock' },
            { key: 'status', title: 'Status', render: (row: any) => <StatusBadge status={row.status} /> },
            { key: 'action', title: 'Action', render: (row: any) => <Link href={`/products/${row.id}/edit`} className='text-primary underline'>Edit</Link> }
          ]}
        />
        <Link href='/products/create'><Button className='mt-4'>Add Product</Button></Link>
      </AdminLayout>
    </ProtectedRoute>
  );
}
