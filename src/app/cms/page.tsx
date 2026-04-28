'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function CmsPage() { return <ProtectedRoute><AdminLayout><PageHeader title='CMS Pages' description='Manage static pages and policies.' /><form className='space-y-3 rounded-lg border p-4'><Input placeholder='Page title' /><Input placeholder='Slug' /><Textarea placeholder='Rich text content placeholder' /><Button>Save Page</Button></form></AdminLayout></ProtectedRoute>; }
