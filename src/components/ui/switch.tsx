'use client';
import { cn } from '@/lib/utils';
export const Switch = ({ checked, onCheckedChange }: { checked?: boolean; onCheckedChange?: (value: boolean) => void }) => (
  <button type='button' onClick={() => onCheckedChange?.(!checked)} className={cn('h-6 w-11 rounded-full p-1 transition', checked ? 'bg-primary' : 'bg-muted')}>
    <span className={cn('block h-4 w-4 rounded-full bg-white transition', checked ? 'translate-x-5' : 'translate-x-0')} />
  </button>
);
