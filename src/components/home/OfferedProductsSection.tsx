import { SectionTitle } from '../shared/SectionTitle';
import { ProductGrid } from '../product/ProductGrid';
import { mockProducts } from '@/lib/constants';

export const OfferedProductsSection = () => <section className='container mx-auto px-4 py-8'><SectionTitle title='OfferedProducts' /><ProductGrid products={mockProducts.slice(0,4)} /></section>;
