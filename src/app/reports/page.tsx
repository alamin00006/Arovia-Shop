'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { SalesChart } from '@/components/charts/SalesChart';
import { Button } from '@/components/ui/button';

export default function ReportsPage() { return <ProtectedRoute><AdminLayout><PageHeader title='Reports' description='Sales, orders, customer and product performance.' action={<Button>Export CSV</Button>} /><SalesChart data={[{ label: 'Mon', value: 12000 }, { label: 'Tue', value: 18000 }, { label: 'Wed', value: 9000 }]} /></AdminLayout></ProtectedRoute>; }
