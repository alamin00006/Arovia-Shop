'use client';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
export const SearchInput = ({ value, onChange, placeholder='Search products...' }: { value: string; onChange: (v: string) => void; placeholder?: string }) => (
  <div className='relative'><Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' /><Input className='pl-9' value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} /></div>
);
