import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductTabs } from '@/components/product/ProductTabs';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { FrequentlyBoughtTogether } from '@/components/product/FrequentlyBoughtTogether';
import { mockProducts } from '@/lib/constants';

const getProductWithFallback = async (slug: string) => {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.EXPO_PUBLIC_API_BASE_URL;
  if (!apiBase) return { product: mockProducts.find((i) => i.slug === slug) || mockProducts[0], fallback: true };

  try {
    const res = await fetch(`${apiBase}/products/${slug}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed');
    const payload = await res.json();
    const product = payload?.data || payload;
    return { product, fallback: false };
  } catch {
    return { product: mockProducts.find((i) => i.slug === slug) || mockProducts[0], fallback: true };
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { product: p } = await getProductWithFallback(slug);
  return { title: `${p.name} | GhorerFresh`, description: `Buy ${p.name} at best price.`, openGraph: { title: p.name, images: [p.images?.[0] || p.image] } };
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { product, fallback } = await getProductWithFallback(slug);
  const normalized = { ...product, images: product.images || [product.image] };

  return <><Header /><main className='container mx-auto px-4 py-6'>{fallback && <p className='mb-3 text-xs text-amber-600'>Backend unavailable. Showing demo product.</p>}<div className='grid gap-8 lg:grid-cols-2'><ProductGallery images={normalized.images} /><ProductInfo product={normalized} /></div><ProductTabs /><RelatedProducts products={mockProducts} /><FrequentlyBoughtTogether products={mockProducts} /></main><Footer /></>;
}
