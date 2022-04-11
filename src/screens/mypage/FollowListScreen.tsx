import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import FollowerListScene from './FollowerListScene';
import FollowingListScene from './FollowingListScene';

import { fontStyles } from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

const renderScene = SceneMap({
  play: FollowerListScene,
  musical: FollowingListScene,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    pressOpacity={undefined}
    pressColor={undefined}
    labelStyle={styles.labelText}
    activeColor={AppColors.textPrimary}
    inactiveColor={AppColors.textSecondary}
  />
);

const routes = [
  { key: 'followers', title: '팔로워' },
  { key: 'followings', title: '팔로잉' },
];

function FollowListScreen() {
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
}

export default FollowListScreen;

const styles = StyleSheet.create({
  labelText: {
    ...fontStyles.text1, //TODO 디자인 완성 후 수정 필요.
    color: AppColors.textSecondary,
  },
});
