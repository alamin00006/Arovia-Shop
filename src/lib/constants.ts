import { Product } from '@/types/product.type';

export const mockProducts: Product[] = [
  { id: '1', name: 'Premium Apple', slug: 'premium-apple', images: ['https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500'], regularPrice: 220, salePrice: 199, rating: 4.5, stockQuantity: 40, badges: ['BEST_SELLING'] },
  { id: '2', name: 'Organic Carrot', slug: 'organic-carrot', images: ['https://images.unsplash.com/photo-1447175008436-170170753d52?w=500'], regularPrice: 80, salePrice: 70, rating: 4.2, stockQuantity: 60, badges: ['NEW_ARRIVAL'] },
  { id: '3', name: 'Fresh Tomato', slug: 'fresh-tomato', images: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500'], regularPrice: 90, salePrice: 75, rating: 4.1, stockQuantity: 30, badges: ['OFFERED'] },
  { id: '4', name: 'Hilsa Fish', slug: 'hilsa-fish', images: ['https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500'], regularPrice: 1400, salePrice: 1250, rating: 4.7, stockQuantity: 0, badges: ['FLASH_SALE', 'STOCK_OUT'] }
];

export const trustBadges = ['Secure payment', 'Fast delivery', 'Authentic products', 'Easy return'];
