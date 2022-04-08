import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/utils/RootNavigation';
import AppMain from './src/navigations/AppMain';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <AppMain />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
