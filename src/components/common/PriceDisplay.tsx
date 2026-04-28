import { Text, View } from 'react-native';
import { formatCurrency } from '@/utils/formatters';
import { getDiscountPercent } from '@/utils/helpers';

export const PriceDisplay = ({ regularPrice, salePrice }: { regularPrice: number; salePrice?: number }) => <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}><Text style={{ fontWeight: '700', color: '#16a34a' }}>{formatCurrency(salePrice ?? regularPrice)}</Text>{salePrice ? <><Text style={{ textDecorationLine: 'line-through', color: '#666' }}>{formatCurrency(regularPrice)}</Text><Text style={{ color: '#16a34a' }}>-{getDiscountPercent(regularPrice, salePrice)}%</Text></> : null}</View>;
