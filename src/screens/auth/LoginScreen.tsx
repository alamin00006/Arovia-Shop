import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { AppButton } from '@/components/common/AppButton';
import { AppInput } from '@/components/common/AppInput';
import { loginSchema } from '@/schemas/auth.schema';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth } from '@/redux/features/auth/authSlice';

export const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm({ resolver: zodResolver(loginSchema) });
  return <View style={{ flex:1,padding:20,justifyContent:'center',gap:8 }}><Text style={{ fontSize:28,fontWeight:'700' }}>Welcome Back</Text><Controller control={control} name='credential' render={({ field }) => <AppInput placeholder='Phone or email' value={field.value} onChangeText={field.onChange} />} /><Controller control={control} name='password' render={({ field }) => <AppInput placeholder='Password' secureTextEntry value={field.value} onChangeText={field.onChange} />} /><AppButton title='Login' onPress={handleSubmit(() => { dispatch(setAuth({ user: { id:'1',name:'Demo User',email:'demo@mail.com',phone:'017', }, token:'demo-token' })); Toast.show({ type:'success', text1:'Logged in' }); })} /><Text>OTP login placeholder for future</Text></View>;
};
