import { SectionTitle } from '../shared/SectionTitle';
import { ProductGrid } from '../product/ProductGrid';
import { mockProducts } from '@/lib/constants';

export const FlashSaleSection = () => <section className='container mx-auto px-4 py-8'><SectionTitle title='FlashSale' /><ProductGrid products={mockProducts.slice(0,4)} /></section>;
