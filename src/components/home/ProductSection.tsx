import { Text, View } from 'react-native';
import { ProductGrid } from '@/components/product/ProductGrid';
import { mockProducts } from '@/utils/constants';
export const ProductSection = ({ title }: { title: string }) => <View style={{ marginTop: 16 }}><Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 8 }}>{title}</Text><ProductGrid products={mockProducts} /></View>;
