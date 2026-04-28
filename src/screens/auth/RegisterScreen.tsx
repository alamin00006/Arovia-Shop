import { View } from 'react-native';
import { AppInput } from '@/components/common/AppInput';
import { AppButton } from '@/components/common/AppButton';
export const RegisterScreen = () => <View style={{ flex:1,padding:20,gap:8 }}><AppInput placeholder='Name' /><AppInput placeholder='Phone' /><AppInput placeholder='Email' /><AppInput placeholder='Password' secureTextEntry /><AppButton title='Register' /></View>;
