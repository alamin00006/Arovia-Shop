'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function DeliveryPage() { return <ProtectedRoute><AdminLayout><PageHeader title='Delivery Areas' description='Set delivery charge and free threshold.' /><form className='grid gap-3 md:grid-cols-2 rounded-lg border p-4'><Input placeholder='Area name' /><Input type='number' placeholder='Delivery charge' /><Input type='number' placeholder='Free delivery threshold' /><Button>Save Area</Button></form></AdminLayout></ProtectedRoute>; }
