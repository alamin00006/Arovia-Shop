import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@/screens/home/HomeScreen';
import { ShopScreen } from '@/screens/shop/ShopScreen';
import { CartScreen } from '@/screens/cart/CartScreen';
import { WishlistScreen } from '@/screens/account/WishlistScreen';
import { AccountScreen } from '@/screens/account/AccountScreen';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name='HomeTab' component={HomeScreen} options={{ title: 'Home' }} />
    <Tab.Screen name='ShopTab' component={ShopScreen} options={{ title: 'Shop' }} />
    <Tab.Screen name='CartTab' component={CartScreen} options={{ title: 'Cart' }} />
    <Tab.Screen name='WishlistTab' component={WishlistScreen} options={{ title: 'Wishlist' }} />
    <Tab.Screen name='AccountTab' component={AccountScreen} options={{ title: 'Account' }} />
  </Tab.Navigator>
);
