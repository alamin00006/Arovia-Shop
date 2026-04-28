import { useRef, useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { SearchBar } from '@/components/common/SearchBar';
import { ProductCard } from '@/components/product/ProductCard';
import { mockProducts } from '@/utils/constants';
import { useCart } from '@/hooks/useCart';
import { useNavigation } from '@react-navigation/native';
import { FilterBottomSheet } from '@/components/sheets/FilterBottomSheet';
import { AppButton } from '@/components/common/AppButton';

export const ShopScreen = () => {
  const [q, setQ] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const sheetRef = useRef<any>(null);
  const { addItem } = useCart();
  const nav = useNavigation<any>();
  const data = mockProducts.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));

  return <View style={{ flex:1, padding:16, gap:8 }}><SearchBar value={q} onChangeText={setQ} /><AppButton title='Open Filters' variant='outline' onPress={() => sheetRef.current?.expand()} /><FlatList data={data} numColumns={2} keyExtractor={(i)=>i.id} onEndReachedThreshold={0.4} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); setTimeout(()=>setRefreshing(false),700); }} />} renderItem={({item}) => <ProductCard product={item} onAdd={() => addItem({ productId:item.id, product:item, quantity:1 })} onPress={() => nav.navigate('ProductDetails', { slug: item.slug })} />} /><FilterBottomSheet sheetRef={sheetRef} /></View>;
};
