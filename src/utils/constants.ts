import { Product } from '@/types/product.type';

export const trustBadges = ['Authentic products', 'Fast delivery', 'Secure payment', 'Easy return'];
export const mockProducts: Product[] = [
  { id: '1', name: 'Premium Apple', slug: 'premium-apple', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500', regularPrice: 220, salePrice: 199, rating: 4.5, stock: 20, badges: ['BEST_SELLING'] },
  { id: '2', name: 'Organic Carrot', slug: 'organic-carrot', image: 'https://images.unsplash.com/photo-1447175008436-170170753d52?w=500', regularPrice: 90, salePrice: 75, rating: 4.3, stock: 12, badges: ['NEW_ARRIVAL'] },
  { id: '3', name: 'Hilsa Fish', slug: 'hilsa-fish', image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500', regularPrice: 1400, salePrice: 1299, rating: 4.8, stock: 0, badges: ['FLASH_SALE','STOCK_OUT'] }
];
