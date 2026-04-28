import { Text, View } from 'react-native';
import { CartItem as CartItemType } from '@/types/cart.type';
import { AppButton } from '@/components/common/AppButton';
export const CartItem = ({ item, onInc, onDec, onRemove }: { item: CartItemType; onInc: () => void; onDec: () => void; onRemove: () => void }) => <View style={{ borderBottomWidth: 1, borderColor: '#eee', paddingVertical: 12 }}><Text style={{ fontWeight: '600' }}>{item.product.name}</Text><Text>Qty: {item.quantity}</Text><View style={{ flexDirection:'row', gap:8, marginTop:8 }}><AppButton title='-' variant='outline' onPress={onDec} /><AppButton title='+' variant='outline' onPress={onInc} /><AppButton title='Remove' variant='outline' onPress={onRemove} /></View></View>;
