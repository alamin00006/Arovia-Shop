import { View } from 'react-native';
import { AppInput } from '@/components/common/AppInput';
import { AppButton } from '@/components/common/AppButton';
export const AddressForm = () => <View style={{ gap: 8 }}><AppInput placeholder='Label' /><AppInput placeholder='Address' /><AppInput placeholder='City' /><AppInput placeholder='Phone' /><AppButton title='Save Address' /></View>;
