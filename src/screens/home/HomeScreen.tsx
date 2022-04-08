import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import PlayListScene from './PlayListScene';
import MusicalListScene from './MusicalListScene';
import AppColors from '../../utils/AppColors';
import { fontStyles } from '../../assets/styles/fontStyles';

const renderScene = SceneMap({
  play: PlayListScene,
  musical: MusicalListScene,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    renderIndicator={() => null}
    style={{}}
    contentContainerStyle={styles.tabBarContainer}
    pressOpacity={undefined}
    pressColor={undefined}
    labelStyle={styles.labelText}
    activeColor={AppColors.textPrimary}
    inactiveColor={AppColors.textSecondary}
  />
);

const routes = [
  { key: 'play', title: '연극' },
  { key: 'musical', title: '뮤지컬' },
];

function HomeScreen() {
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

export default HomeScreen;

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: AppColors.white,
  },
  labelText: {
    ...fontStyles.text1,
    color: AppColors.textSecondary,
  },
});
