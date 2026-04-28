import { View } from 'react-native';
import { AppInput } from '@/components/common/AppInput';
import { AppButton } from '@/components/common/AppButton';
export const ForgotPasswordScreen = () => <View style={{ flex:1,padding:20,gap:8 }}><AppInput placeholder='Email' /><AppButton title='Send Reset Link' /></View>;
