import { Text, View } from 'react-native';
import { formatCurrency } from '@/utils/formatters';
import { FreeDeliveryProgress } from './FreeDeliveryProgress';
import { AppButton } from '@/components/common/AppButton';

export const CartSummary = ({ subtotal, onCheckout }: { subtotal: number; onCheckout: () => void }) => <View style={{ borderWidth:1, borderColor:'#eee', borderRadius:12, padding:12 }}><Text style={{ fontWeight:'700' }}>Summary</Text><Text>Subtotal: {formatCurrency(subtotal)}</Text><Text>Delivery: Calculated at checkout</Text><FreeDeliveryProgress subtotal={subtotal} /><View style={{ marginTop: 12 }}><AppButton title='Checkout' onPress={onCheckout} /></View></View>;
