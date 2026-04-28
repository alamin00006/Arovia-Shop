'use client';
import { Input } from '../ui/input';
import { Select } from '../ui/select';

interface Column<T> { key: keyof T | string; title: string; render?: (row: T) => React.ReactNode; }

export function DataTable<T extends Record<string, any>>({
  data, columns, search, onSearch, sort, onSort, pagination, onPageChange
}: {
  data: T[]; columns: Column<T>[]; search: string; onSearch: (v: string) => void; sort: string; onSort: (v: string) => void;
  pagination: { page: number; totalPages: number }; onPageChange: (page: number) => void;
}) {
  return (
    <div className='space-y-4 rounded-lg border p-4'>
      <div className='flex flex-col gap-3 md:flex-row'>
        <Input placeholder='Search...' value={search} onChange={(e) => onSearch(e.target.value)} className='max-w-sm' />
        <Select value={sort} onChange={(e) => onSort(e.target.value)} className='w-48'>
          <option value='createdAt:desc'>Newest</option>
          <option value='createdAt:asc'>Oldest</option>
        </Select>
      </div>
      <div className='overflow-x-auto'>
        <table className='w-full text-sm'>
          <thead><tr className='border-b'>{columns.map((c) => <th className='p-2 text-left font-medium' key={String(c.key)}>{c.title}</th>)}</tr></thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className='border-b'>
                {columns.map((c) => <td key={String(c.key)} className='p-2'>{c.render ? c.render(row) : row[c.key as keyof T]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex items-center justify-end gap-2'>
        <button onClick={() => onPageChange(Math.max(pagination.page - 1, 1))}>Prev</button>
        <span>{pagination.page} / {pagination.totalPages}</span>
        <button onClick={() => onPageChange(Math.min(pagination.page + 1, pagination.totalPages))}>Next</button>
      </div>
    </div>
  );
}
