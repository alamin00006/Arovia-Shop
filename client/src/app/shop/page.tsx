'use client';
import { useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/product/ProductGrid';
import { SearchInput } from '@/components/shared/SearchInput';
import { mockProducts } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { useGetProductsQuery } from '@/redux/api/productApi';

export default function ShopPage() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('latest');
  const { data, isError } = useGetProductsQuery({ search, sortBy: sort });

  const sourceProducts = useMemo(() => {
    const apiProducts = data?.data || data || [];
    if (isError || !Array.isArray(apiProducts) || !apiProducts.length) return mockProducts;
    return apiProducts;
  }, [data, isError]);

  const filtered = useMemo(() => {
    const items = sourceProducts.filter((p: any) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (sort === 'price_asc') return [...items].sort((a: any, b: any) => (a.salePrice ?? a.regularPrice) - (b.salePrice ?? b.regularPrice));
    if (sort === 'price_desc') return [...items].sort((a: any, b: any) => (b.salePrice ?? b.regularPrice) - (a.salePrice ?? a.regularPrice));
    return items;
  }, [sourceProducts, search, sort]);

  return <><Header /><main className='container mx-auto px-4 py-6'><h1 className='mb-4 text-2xl font-semibold'>Shop</h1>{isError && <p className='mb-3 text-xs text-amber-600'>Backend unavailable. Showing demo products.</p>}<div className='mb-4 grid gap-3 md:grid-cols-4'><SearchInput value={search} onChange={setSearch} /><select className='h-10 rounded border px-3 text-sm' value={sort} onChange={(e)=>setSort(e.target.value)}><option value='latest'>Latest</option><option value='price_asc'>Price low-high</option><option value='price_desc'>Price high-low</option></select><Button variant='outline'>Category Filter</Button><Button variant='outline'>Brand Filter</Button></div><ProductGrid products={filtered} /><div className='mt-6 flex justify-center gap-2'><Button variant='outline'>Prev</Button><Button>1</Button><Button variant='outline'>Next</Button></div></main><Footer /></>;
}
