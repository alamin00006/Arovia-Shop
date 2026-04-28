import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@/screens/auth/LoginScreen';
import { RegisterScreen } from '@/screens/auth/RegisterScreen';
import { ForgotPasswordScreen } from '@/screens/auth/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Register' component={RegisterScreen} options={{ title: 'Create Account' }} />
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
  </Stack.Navigator>
);
