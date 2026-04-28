'use client';

import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { OrderStatusChart } from '@/components/charts/OrderStatusChart';
import { PageHeader } from '@/components/shared/PageHeader';
import { formatCurrency } from '@/lib/formatters';

const statItems = [
  { label: 'Total Sales', value: formatCurrency(1450000) },
  { label: 'Total Orders', value: '2,480' },
  { label: 'Total Customers', value: '1,220' },
  { label: 'Pending Orders', value: '64' }
];

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <PageHeader title='Dashboard Overview' description='Monitor sales, orders, and product performance.' />
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {statItems.map((item) => <Card key={item.label}><CardHeader><CardTitle className='text-sm text-muted-foreground'>{item.label}</CardTitle></CardHeader><CardContent><p className='text-2xl font-bold'>{item.value}</p></CardContent></Card>)}
        </div>
        <div className='mt-6 grid gap-4 lg:grid-cols-2'>
          <Card><CardHeader><CardTitle>Revenue Trend</CardTitle></CardHeader><CardContent><RevenueChart data={[{ name: 'Jan', revenue: 120000 }, { name: 'Feb', revenue: 170000 }, { name: 'Mar', revenue: 220000 }, { name: 'Apr', revenue: 180000 }]} /></CardContent></Card>
          <Card><CardHeader><CardTitle>Order Status</CardTitle></CardHeader><CardContent><OrderStatusChart data={[{ name: 'Pending', value: 64 }, { name: 'Processing', value: 48 }, { name: 'Shipped', value: 36 }, { name: 'Delivered', value: 120 }]} /></CardContent></Card>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
