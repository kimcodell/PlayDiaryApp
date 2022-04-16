import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import FollowerListScene from './FollowerListScene';
import FollowingListScene from './FollowingListScene';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MyPageStackParamList from '../../interfaces/navigatorParam/MypageStackParamList';
import { useSelector } from 'react-redux';

import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    pressOpacity={0.7}
    pressColor={AppColors.background}
    labelStyle={styles.labelText}
    activeColor={AppColors.textPrimary}
    inactiveColor={AppColors.textSecondary}
    indicatorStyle={{
      backgroundColor: AppColors.textPrimary,
      borderWidth: 1,
    }}
    style={{ backgroundColor: AppColors.white }}
  />
);

type Props = NativeStackScreenProps<MyPageStackParamList, 'tab/mypage/follows'>;

function FollowListScreen({
  route: {
    params: { startIndex, userId },
  },
}: Props) {
  // const myUserId = useSelector();
  const myUserId = 1;

  const [index, setIndex] = useState<number>(startIndex);
  const [routes] = useState([
    { key: 'followers', title: '팔로워' },
    { key: 'followings', title: '팔로잉' },
  ]);

  const renderScene = useCallback(
    ({ route }: { route: any }) => {
      switch (route.key) {
        case 'followers':
          return <FollowerListScene userId={userId ? userId : myUserId} />;
        case 'followings':
          return <FollowingListScene userId={userId ? userId : myUserId} />;
        default:
          return null;
      }
    },
    [userId],
  );

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
    ...fontStyles.text16,
    fontWeight: '700',
    color: AppColors.textSecondary,
  },
});
