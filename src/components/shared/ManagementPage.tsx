'use client';

import { useState } from 'react';
import { PageHeader } from './PageHeader';
import { DataTable } from './DataTable';
import { EmptyState } from './EmptyState';

export const ManagementPage = ({ title, description, columns, rows }: { title: string; description: string; columns: any[]; rows: any[] }) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('createdAt:desc');
  const [page, setPage] = useState(1);

  const filtered = rows.filter((r) => JSON.stringify(r).toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <PageHeader title={title} description={description} />
      {filtered.length ? (
        <DataTable data={filtered} columns={columns} search={search} onSearch={setSearch} sort={sort} onSort={setSort} pagination={{ page, totalPages: 1 }} onPageChange={setPage} />
      ) : (
        <EmptyState title='No items found' />
      )}
    </div>
  );
};
