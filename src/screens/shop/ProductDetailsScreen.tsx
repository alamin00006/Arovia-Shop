import { ScrollView, Text } from 'react-native';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { mockProducts } from '@/utils/constants';
import { ProductReviews } from '@/components/product/ProductReviews';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { FrequentlyBoughtTogether } from '@/components/product/FrequentlyBoughtTogether';
import { useCart } from '@/hooks/useCart';
import { useGetProductBySlugQuery } from '@/redux/api/productApi';

export const ProductDetailsScreen = ({ route }: any) => {
  const slug = route.params?.slug;
  const { data, isError } = useGetProductBySlugQuery(slug);
  const { addItem } = useCart();

  const apiProduct = data?.data || data;
  const fallbackProduct = mockProducts.find((p) => p.slug === slug) || mockProducts[0];
  const product = isError || !apiProduct ? fallbackProduct : apiProduct;

  return <ScrollView contentContainerStyle={{ padding:16, gap:12 }}>{isError ? <Text style={{ color:'#b45309' }}>Backend disconnected. Showing demo product.</Text> : null}<ProductGallery image={product.image || product.images?.[0]} /><ProductInfo product={product} onAdd={() => addItem({ productId: product.id, product, quantity: 1 })} /><Text>Product description and video placeholder</Text><ProductReviews /><RelatedProducts /><FrequentlyBoughtTogether /></ScrollView>;
};
