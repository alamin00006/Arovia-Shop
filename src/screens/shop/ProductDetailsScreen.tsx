import { ScrollView, Text, View } from 'react-native';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { mockProducts } from '@/utils/constants';
import { ProductReviews } from '@/components/product/ProductReviews';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { FrequentlyBoughtTogether } from '@/components/product/FrequentlyBoughtTogether';
import { useCart } from '@/hooks/useCart';

export const ProductDetailsScreen = ({ route }: any) => {
  const product = mockProducts.find((p) => p.slug === route.params?.slug) || mockProducts[0];
  const { addItem } = useCart();
  return <ScrollView contentContainerStyle={{ padding:16, gap:12 }}><ProductGallery image={product.image} /><ProductInfo product={product} onAdd={() => addItem({ productId: product.id, product, quantity: 1 })} /><Text>Product description and video placeholder</Text><ProductReviews /><RelatedProducts /><FrequentlyBoughtTogether /></ScrollView>;
};
