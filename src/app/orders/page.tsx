'use client';

import Link from 'next/link';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { ManagementPage } from '@/components/shared/ManagementPage';
import { StatusBadge } from '@/components/shared/StatusBadge';

const rows = [
  { id: 'o1', orderNumber: 'ORD-1001', customer: 'Hasan', orderStatus: 'PENDING', paymentStatus: 'UNPAID', total: 2400 },
  { id: 'o2', orderNumber: 'ORD-1002', customer: 'Nusrat', orderStatus: 'DELIVERED', paymentStatus: 'PAID', total: 5200 }
];

export default function OrdersPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <ManagementPage title='Orders' description='Track and manage customer orders.' rows={rows} columns={[
          { key: 'orderNumber', title: 'Order #' },
          { key: 'customer', title: 'Customer' },
          { key: 'orderStatus', title: 'Order Status', render: (r: any) => <StatusBadge status={r.orderStatus} /> },
          { key: 'paymentStatus', title: 'Payment', render: (r: any) => <StatusBadge status={r.paymentStatus} /> },
          { key: 'total', title: 'Total' },
          { key: 'action', title: 'Action', render: (r: any) => <Link href={`/orders/${r.id}`} className='text-primary underline'>Details</Link> }
        ]} />
      </AdminLayout>
    </ProtectedRoute>
  );
}
