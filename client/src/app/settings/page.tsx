'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function SettingsPage() { return <ProtectedRoute><AdminLayout><PageHeader title='Settings' description='Store, contact, payment and courier configurations.' /><form className='space-y-3 rounded-lg border p-4'><Input placeholder='Store name' /><Input placeholder='Support email' /><Textarea placeholder='Social links JSON' /><Button>Save Settings</Button></form></AdminLayout></ProtectedRoute>; }
