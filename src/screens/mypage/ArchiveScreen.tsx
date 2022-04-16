import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import RatingsScene from './RatingsScene';
import ReviewsScene from './ReviewsScence';
import WantsPlaysScene from './WantsPlaysScene';

import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

const renderScene = SceneMap({
  ratings: RatingsScene,
  reviews: ReviewsScene,
  wants: WantsPlaysScene,
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
  { key: 'ratings', title: '평가' },
  { key: 'reviews', title: '후기' },
  { key: 'wants', title: '보고 싶은' },
];

function ArchiveScreen() {
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

export default ArchiveScreen;

const styles = StyleSheet.create({
  labelText: {
    ...fontStyles.text16, //TODO 디자인 완성 후 수정 필요.
    fontWeight: '700',
    color: AppColors.textSecondary,
  },
});
