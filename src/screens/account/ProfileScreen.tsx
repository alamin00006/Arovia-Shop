import { View } from 'react-native';
import { AppInput } from '@/components/common/AppInput';
import { AppButton } from '@/components/common/AppButton';
export const ProfileScreen = () => <View style={{ flex:1,padding:16,gap:8 }}><AppInput placeholder='Name' /><AppInput placeholder='Phone' /><AppInput placeholder='Email' /><AppButton title='Update Profile' /></View>;
