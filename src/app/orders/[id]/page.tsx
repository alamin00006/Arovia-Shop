'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/PageHeader';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Button } from '@/components/ui/button';

export default function OrderDetailsPage() {
  return (
    <ProtectedRoute><AdminLayout><PageHeader title='Order Details' description='Order #ORD-1001' action={<Button>Print Invoice</Button>} />
      <div className='grid gap-4 lg:grid-cols-3'>
        <Card className='lg:col-span-2'><CardHeader><CardTitle>Items</CardTitle></CardHeader><CardContent><div className='space-y-2 text-sm'><p>Premium Apple x 2 - ৳400</p><p>Organic Carrot x 3 - ৳240</p></div></CardContent></Card>
        <Card><CardHeader><CardTitle>Status</CardTitle></CardHeader><CardContent><div className='space-y-2'><StatusBadge status='PENDING' /><StatusBadge status='UNPAID' /></div></CardContent></Card>
      </div>
    </AdminLayout></ProtectedRoute>
  );
}
