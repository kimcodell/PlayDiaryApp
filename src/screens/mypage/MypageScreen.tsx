import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { navigate } from '../../utils/RootNavigation';

import { routes } from '../../navigations/routes';

function MypageScreen() {
  return (
    <View>
      <Pressable onPress={() => navigate(routes.tab.mypage.FOLLOW_LIST_SCREEN)}>
        <Text>팔로우</Text>
      </Pressable>
      <Pressable onPress={() => navigate(routes.tab.mypage.SETTING_SCREEN)}>
        <Text>설정</Text>
      </Pressable>
    </View>
  );
}

export default MypageScreen;

const styles = StyleSheet.create({});
