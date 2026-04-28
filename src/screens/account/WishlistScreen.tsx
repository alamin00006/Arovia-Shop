import { FlatList } from 'react-native';
import { ProductCard } from '@/components/product/ProductCard';
import { mockProducts } from '@/utils/constants';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { EmptyState } from '@/components/common/EmptyState';

export const WishlistScreen = ({ navigation }: any) => {
  const { items } = useWishlist();
  const { addItem } = useCart();
  const data = mockProducts.filter((p) => items.includes(p.id));
  if (!data.length) return <EmptyState title='Wishlist is empty' />;
  return <FlatList contentContainerStyle={{ padding:16 }} numColumns={2} data={data} keyExtractor={(i)=>i.id} renderItem={({item}) => <ProductCard product={item} onAdd={() => addItem({ productId: item.id, product: item, quantity: 1 })} onPress={() => navigation.navigate('ProductDetails', { slug: item.slug })} />} />;
};
