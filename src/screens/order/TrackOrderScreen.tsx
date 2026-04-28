import { Text, View } from 'react-native';
import { AppInput } from '@/components/common/AppInput';
import { AppButton } from '@/components/common/AppButton';

export const TrackOrderScreen = () => <View style={{ flex:1,padding:16,gap:8 }}><AppInput placeholder='Order number / phone' /><AppButton title='Track' /><Text>Status timeline: PENDING → CONFIRMED → PROCESSING → SHIPPED → DELIVERED</Text><Text>Payment status: UNPAID</Text></View>;
