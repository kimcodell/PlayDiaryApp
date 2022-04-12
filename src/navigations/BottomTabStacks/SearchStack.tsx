import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../../screens/search/SearchScreen';
import SearchResultScreen from '../../screens/search/SearchResult';

import { routes } from '../routes';
import AppColors from '../../utils/AppColors';

const Stack = createNativeStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName={routes.tab.search.SEARCH_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: AppColors.white },
      }}>
      <Stack.Screen
        name={routes.tab.search.SEARCH_SCREEN}
        component={SearchScreen}
      />
      <Stack.Screen
        name={routes.tab.search.SEARCH_RESULT_SCREEN}
        component={SearchResultScreen}
        options={{
          animation: 'none',
        }}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
