'use client';
import Link from 'next/link';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { ManagementPage } from '@/components/shared/ManagementPage';

const rows = [{ id: 'u1', name: 'Hasan', phone: '017000001', orders: 12, status: 'ACTIVE' }];

export default function CustomersPage() { return <ProtectedRoute><AdminLayout><ManagementPage title='Customers' description='View, block/unblock and inspect customer history.' rows={rows} columns={[{ key: 'name', title: 'Name' }, { key: 'phone', title: 'Phone' }, { key: 'orders', title: 'Orders' }, { key: 'action', title: 'Action', render: (r: any) => <Link href={`/customers/${r.id}`} className='text-primary underline'>Details</Link> }]} /></AdminLayout></ProtectedRoute>; }
