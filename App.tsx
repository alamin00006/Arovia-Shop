import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { RootNavigator } from '@/navigation/RootNavigator';
import { persistor, store } from '@/redux/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootNavigator />
          <Toast />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
