import React, { useCallback } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import tailwind from 'twrnc';
import FollowerFollowingIndex from '../../enums/FollowerFollowingIndex';
import { routes } from '../../navigations/routes';
import { navigate } from '../../utils/RootNavigation';

import AppColors from '../../utils/AppColors';

function NumOfFollwerAndFollowingButton({
  userId,
  follower,
  following,
}: {
  userId?: number;
  follower: number;
  following: number;
}) {
  const onPressFollower = useCallback(() => {
    if (userId) {
      //타 유저 프로필에서 클릭하는 경우
      navigate(routes.root.FOLLOW_LIST_SCREEN, {
        startIndex: FollowerFollowingIndex['팔로워'],
        userId,
      });
    } else {
      navigate(routes.tab.mypage.FOLLOW_LIST_SCREEN, {
        startIndex: FollowerFollowingIndex['팔로워'],
      });
    }
  }, [userId]);
  const onPressFollowing = useCallback(() => {
    if (userId) {
      navigate(routes.root.FOLLOW_LIST_SCREEN, {
        startIndex: FollowerFollowingIndex['팔로잉'],
        userId,
      });
    } else {
      navigate(routes.tab.mypage.FOLLOW_LIST_SCREEN, {
        startIndex: FollowerFollowingIndex['팔로잉'],
      });
    }
  }, [userId]);
  return (
    <View style={tailwind`flex-row items-center`}>
      <Pressable
        onPress={onPressFollower}
        style={styles.buttonContainer}
        accessibilityRole="button"
        accessibilityLabel="팔로워 목록">
        <Text style={styles.labelText}>팔로워</Text>
        <Text style={styles.numberText}>{follower}</Text>
      </Pressable>
      <Text style={styles.barText}>|</Text>
      <Pressable
        onPress={onPressFollowing}
        style={styles.buttonContainer}
        accessibilityRole="button"
        accessibilityLabel="팔로잉 목록">
        <Text style={styles.labelText}>팔로잉</Text>
        <Text style={styles.numberText}>{following}</Text>
      </Pressable>
    </View>
  );
}

export default NumOfFollwerAndFollowingButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 12,
    color: AppColors.textSecondary,
  },
  barText: {
    fontSize: 10,
    color: AppColors.textSecondary,
    marginHorizontal: 6,
  },
  numberText: {
    marginLeft: 4,
    fontSize: 12,
    color: AppColors.textPrimary,
  },
});
