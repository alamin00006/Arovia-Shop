import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Product } from '@/types/product.type';
import { PriceDisplay } from '@/components/common/PriceDisplay';
import { RatingStars } from '@/components/common/RatingStars';
import { AppButton } from '@/components/common/AppButton';

export const ProductCard = memo(({ product, onAdd, onPress }: { product: Product; onAdd: () => void; onPress: () => void }) => (
  <Pressable onPress={onPress} style={{ flex: 1, borderWidth: 1, borderColor: '#eee', borderRadius: 12, padding: 10, margin: 4 }}>
    <Image source={{ uri: product.image }} style={{ width: '100%', height: 120, borderRadius: 10 }} contentFit='cover' />
    <Text style={{ marginTop: 8, fontSize: 12, color: '#16a34a' }}>{product.badges[0]}</Text>
    <Text numberOfLines={2} style={{ fontWeight: '600' }}>{product.name}</Text>
    <PriceDisplay regularPrice={product.regularPrice} salePrice={product.salePrice} />
    <RatingStars rating={product.rating} />
    <AppButton title={product.stock === 0 ? 'Stock Out' : 'Add to cart'} disabled={product.stock === 0} onPress={onAdd} />
  </Pressable>
));
