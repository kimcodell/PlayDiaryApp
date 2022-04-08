import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from './routes';
import { Text, View } from 'react-native';

const BottomTab = createBottomTabNavigator();

const Home = () => {
  return (
    <View>
      <Text>홈</Text>
    </View>
  );
};
const Search = () => {
  return (
    <View>
      <Text>검색</Text>
    </View>
  );
};

const Calender = () => {
  return (
    <View>
      <Text>달력</Text>
    </View>
  );
};

const MyPage = () => {
  return (
    <View>
      <Text>마이페이지</Text>
    </View>
  );
};

function RootBottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={routes.tab.home.HOME_SCREEN} component={Home} />
      <BottomTab.Screen
        name={routes.tab.search.SEARCH_STACK}
        component={Search}
      />
      <BottomTab.Screen
        name={routes.tab.calender.CALENDER_SCREERN}
        component={Calender}
      />
      <BottomTab.Screen
        name={routes.tab.mypage.MYPAGE_STACK}
        component={MyPage}
      />
    </BottomTab.Navigator>
  );
}

export default RootBottomTabNavigator;
