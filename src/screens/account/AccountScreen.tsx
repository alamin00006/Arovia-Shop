import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AccountMenuItem } from '@/components/account/AccountMenuItem';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';

export const AccountScreen = () => {
  const nav = useNavigation<any>();
  const dispatch = useAppDispatch();
  return <ScrollView contentContainerStyle={{ padding:16 }}><AccountMenuItem label='Profile' onPress={() => nav.navigate('Profile')} /><AccountMenuItem label='My Orders' onPress={() => nav.navigate('MyOrders')} /><AccountMenuItem label='Address Book' onPress={() => nav.navigate('AddressBook')} /><AccountMenuItem label='Wishlist' onPress={() => nav.navigate('WishlistTab')} /><AccountMenuItem label='My Reviews' onPress={() => nav.navigate('Reviews')} /><AccountMenuItem label='About Us' onPress={() => nav.navigate('About')} /><AccountMenuItem label='Contact Us' onPress={() => nav.navigate('Contact')} /><AccountMenuItem label='FAQ' onPress={() => nav.navigate('FAQ')} /><AccountMenuItem label='Logout' onPress={() => dispatch(logout())} /></ScrollView>;
};
