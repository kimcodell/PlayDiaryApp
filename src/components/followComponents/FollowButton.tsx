import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useAppDispatch } from '../../store';

import AppColors from '../../utils/AppColors';
import fontStyles from '../../assets/styles/fontStyles';

function FollowButton({
  userId,
  isFollowing,
  nickname,
}: {
  userId: number;
  isFollowing: number;
  nickname: string;
}) {
  const dispatch = useAppDispatch();

  const [following, setFollowing] = useState<boolean>(
    isFollowing === 1 ? true : false,
  );

  const onPress = useCallback(() => {
    console.log(userId, '번 사용자');
    // TODO 팔로우 API 연동.
    setFollowing(prev => {
      if (prev) {
        // TODO 팔로우 취소
        console.log('팔로우 취소');
      } else {
        // TODO 팔로우
        console.log('팔로우');
      }
      return !prev;
    });
  }, [userId]);
  return (
    <Pressable
      style={[
        styles.buttonContainer,
        following && {
          backgroundColor: AppColors.followButtonInactiveBackground,
        },
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${nickname}님 팔로우${following ? ' 취소' : ''}`}>
      <Text
        style={[
          styles.buttonText,
          following && { color: AppColors.textSecondary },
        ]}>
        {following ? '팔로잉' : '팔로우'}
      </Text>
    </Pressable>
  );
}

export default FollowButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: AppColors.followButtonBackground,
  },
  buttonText: {
    ...fontStyles.text10,
    color: AppColors.mainColor,
    fontWeight: '700',
  },
});
