'use client';
import { Upload } from 'lucide-react';
import { Input } from '../ui/input';

export const ImageUploader = ({ onChange }: { onChange: (files: FileList | null) => void }) => (
  <label className='flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-6 text-sm text-muted-foreground'>
    <Upload className='mb-2 h-5 w-5' />
    Click to upload image
    <Input type='file' multiple className='hidden' onChange={(e) => onChange(e.target.files)} />
  </label>
);
