import { FlatList } from 'react-native';
import { Product } from '@/types/product.type';
import { ProductCard } from './ProductCard';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '@/hooks/useCart';

export const ProductGrid = ({ products }: { products: Product[] }) => {
  const nav = useNavigation<any>();
  const { addItem } = useCart();
  return <FlatList data={products} numColumns={2} scrollEnabled={false} keyExtractor={(i)=>i.id} renderItem={({item}) => <ProductCard product={item} onAdd={() => addItem({ productId: item.id, product: item, quantity: 1 })} onPress={() => nav.navigate('ProductDetails', { slug: item.slug })} />} />;
};
