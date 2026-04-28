import { Text, View } from 'react-native';
import { Product } from '@/types/product.type';
import { PriceDisplay } from '@/components/common/PriceDisplay';
import { AppButton } from '@/components/common/AppButton';

export const ProductInfo = ({ product, onAdd }: { product: Product & any; onAdd: () => void }) => {
  const stock = product.stock ?? product.stockQuantity ?? 0;
  return <View style={{ gap: 8 }}><Text style={{ fontSize: 24, fontWeight: '700' }}>{product.name}</Text><PriceDisplay regularPrice={product.regularPrice} salePrice={product.salePrice} /><Text>{stock > 0 ? `${stock} in stock` : 'Out of stock'}</Text><AppButton title='Add to cart' onPress={onAdd} disabled={stock===0} /><AppButton title='Buy now' variant='outline' /><Text>WhatsApp order / Call order placeholders</Text></View>;
};
