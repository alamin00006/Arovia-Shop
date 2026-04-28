'use client';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { PageHeader } from '@/components/shared/PageHeader';
import { CategoryForm } from '@/components/forms/CategoryForm';
import { toast } from 'sonner';

export default function CategoriesPage() { return <ProtectedRoute><AdminLayout><PageHeader title='Categories' description='Manage categories and subcategories' /><CategoryForm onSubmit={() => toast.success('Category saved')} /></AdminLayout></ProtectedRoute>; }
