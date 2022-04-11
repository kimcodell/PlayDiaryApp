import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { navigate } from '../../utils/RootNavigation';

import { routes } from '../../navigations/routes';

function MypageScreen() {
  return (
    <View>
      <Pressable onPress={() => navigate(routes.tab.mypage.SETTING_SCREEN)}>
        <Text>q</Text>
      </Pressable>
    </View>
  );
}

export default MypageScreen;

const styles = StyleSheet.create({});
