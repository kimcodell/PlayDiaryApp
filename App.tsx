import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import AppMain from './src/navigations/AppMain';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppMain />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
