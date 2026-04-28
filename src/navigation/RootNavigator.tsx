import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '@/redux/hooks';
import { AuthNavigator } from './AuthNavigator';
import { MainTabNavigator } from './MainTabNavigator';
import { SplashScreen } from '@/screens/splash/SplashScreen';
import { OnboardingScreen } from '@/screens/onboarding/OnboardingScreen';
import { ProductDetailsScreen } from '@/screens/shop/ProductDetailsScreen';
import { CheckoutScreen } from '@/screens/cart/CheckoutScreen';
import { OrderSuccessScreen } from '@/screens/cart/OrderSuccessScreen';
import { TrackOrderScreen } from '@/screens/order/TrackOrderScreen';
import { MyOrdersScreen } from '@/screens/order/MyOrdersScreen';
import { OrderDetailsScreen } from '@/screens/order/OrderDetailsScreen';
import { ProfileScreen } from '@/screens/account/ProfileScreen';
import { AddressBookScreen } from '@/screens/account/AddressBookScreen';
import { ReviewsScreen } from '@/screens/account/ReviewsScreen';
import { AboutScreen } from '@/screens/support/AboutScreen';
import { ContactScreen } from '@/screens/support/ContactScreen';
import { FAQScreen } from '@/screens/support/FAQScreen';
import { StaticPageScreen } from '@/screens/support/StaticPageScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { isAuthenticated } = useAppSelector((s) => s.auth);
  const [showSplash, showOnboarding] = [false, false];

  if (showSplash) return <SplashScreen />;
  if (showOnboarding) return <OnboardingScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name='MainTabs' component={MainTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
            <Stack.Screen name='Checkout' component={CheckoutScreen} />
            <Stack.Screen name='OrderSuccess' component={OrderSuccessScreen} />
            <Stack.Screen name='TrackOrder' component={TrackOrderScreen} />
            <Stack.Screen name='MyOrders' component={MyOrdersScreen} />
            <Stack.Screen name='OrderDetails' component={OrderDetailsScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='AddressBook' component={AddressBookScreen} />
            <Stack.Screen name='Reviews' component={ReviewsScreen} />
            <Stack.Screen name='About' component={AboutScreen} />
            <Stack.Screen name='Contact' component={ContactScreen} />
            <Stack.Screen name='FAQ' component={FAQScreen} />
            <Stack.Screen name='StaticPage' component={StaticPageScreen} />
          </>
        ) : (
          <Stack.Screen name='Auth' component={AuthNavigator} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
