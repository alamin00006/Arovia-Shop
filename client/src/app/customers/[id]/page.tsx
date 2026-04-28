'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CustomerDetailsPage() { return <ProtectedRoute><AdminLayout><div className='grid gap-4 lg:grid-cols-2'><Card><CardHeader><CardTitle>Customer Profile</CardTitle></CardHeader><CardContent><p>Name: Hasan</p><p>Phone: 017000001</p></CardContent></Card><Card><CardHeader><CardTitle>Actions</CardTitle></CardHeader><CardContent><Button variant='destructive'>Block Customer</Button></CardContent></Card></div></AdminLayout></ProtectedRoute>; }
