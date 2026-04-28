import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductTabs } from '@/components/product/ProductTabs';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { FrequentlyBoughtTogether } from '@/components/product/FrequentlyBoughtTogether';
import { mockProducts } from '@/lib/constants';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = mockProducts.find((item) => item.slug === slug) || mockProducts[0];
  return { title: `${p.name} | GhorerFresh`, description: `Buy ${p.name} at best price.`, openGraph: { title: p.name, images: [p.images[0]] } };
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = mockProducts.find((item) => item.slug === slug) || mockProducts[0];
  return <><Header /><main className='container mx-auto px-4 py-6'><div className='grid gap-8 lg:grid-cols-2'><ProductGallery images={product.images} /><ProductInfo product={product} /></div><ProductTabs /><RelatedProducts products={mockProducts} /><FrequentlyBoughtTogether products={mockProducts} /></main><Footer /></>;
}
