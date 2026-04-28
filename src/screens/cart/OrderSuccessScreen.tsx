import { Text, View } from 'react-native';
import { AppButton } from '@/components/common/AppButton';

export const OrderSuccessScreen = ({ navigation }: any) => <View style={{ flex:1,justifyContent:'center',alignItems:'center',padding:20,gap:10 }}><Text style={{ fontSize:24,fontWeight:'700',color:'#16a34a' }}>Order Confirmed</Text><Text>Order number: ORD-9001</Text><AppButton title='Track Order' onPress={() => navigation.navigate('TrackOrder')} /><AppButton title='Continue Shopping' variant='outline' onPress={() => navigation.navigate('MainTabs')} /></View>;
