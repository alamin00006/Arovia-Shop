import { ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';

export const CheckoutScreen = ({ navigation }: any) => <ScrollView contentContainerStyle={{ padding:16 }}><CheckoutForm onSubmit={() => { Toast.show({ type: 'success', text1: 'Order placed' }); navigation.navigate('OrderSuccess'); }} /></ScrollView>;
