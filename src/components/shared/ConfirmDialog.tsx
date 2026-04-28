'use client';
import { useState } from 'react';
import { Button } from '../ui/button';

export const ConfirmDialog = ({ title='Are you sure?', onConfirm, triggerLabel='Delete' }: { title?: string; onConfirm: () => void; triggerLabel?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant='destructive' onClick={() => setOpen(true)}>{triggerLabel}</Button>
      {open && (
        <div className='fixed inset-0 z-50 grid place-items-center bg-black/40 p-4'>
          <div className='w-full max-w-sm rounded-lg bg-card p-5'>
            <p className='mb-4 font-medium'>{title}</p>
            <div className='flex justify-end gap-2'>
              <Button variant='outline' onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant='destructive' onClick={() => { onConfirm(); setOpen(false); }}>Confirm</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
