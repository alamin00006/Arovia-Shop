import { useMemo, useRef, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { SearchBar } from '@/components/common/SearchBar';
import { ProductCard } from '@/components/product/ProductCard';
import { mockProducts } from '@/utils/constants';
import { useCart } from '@/hooks/useCart';
import { useNavigation } from '@react-navigation/native';
import { FilterBottomSheet } from '@/components/sheets/FilterBottomSheet';
import { AppButton } from '@/components/common/AppButton';
import { useGetProductsQuery } from '@/redux/api/productApi';

export const ShopScreen = () => {
  const [q, setQ] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const sheetRef = useRef<any>(null);
  const { addItem } = useCart();
  const nav = useNavigation<any>();
  const { data, isError, refetch } = useGetProductsQuery({ search: q, page: 1, limit: 20 });

  const products = useMemo(() => {
    const apiProducts = data?.data || data || [];
    if (isError || !Array.isArray(apiProducts) || !apiProducts.length) return mockProducts;
    return apiProducts;
  }, [data, isError]);

  return <View style={{ flex:1, padding:16, gap:8 }}><SearchBar value={q} onChangeText={setQ} />{isError ? <Text style={{ color:'#b45309' }}>Backend disconnected. Showing demo products.</Text> : null}<AppButton title='Open Filters' variant='outline' onPress={() => sheetRef.current?.expand()} /><FlatList data={products} numColumns={2} keyExtractor={(i)=>String(i.id)} onEndReachedThreshold={0.4} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => { setRefreshing(true); await refetch(); setRefreshing(false); }} />} renderItem={({item}) => <ProductCard product={item} onAdd={() => addItem({ productId:item.id, product:item, quantity:1 })} onPress={() => nav.navigate('ProductDetails', { slug: item.slug })} />} /><FilterBottomSheet sheetRef={sheetRef} /></View>;
};
