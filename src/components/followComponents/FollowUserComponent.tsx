import React, { useCallback } from 'react';
import { Pressable, View, Image, Text, StyleSheet } from 'react-native';
import tailwind from 'twrnc';
import Follow from '../../interfaces/Follow';
import FollowButton from './FollowButton';
import UserIcon from '../../assets/icons/UserIcon';
import { routes } from '../../navigations/routes';
import { navigate } from '../../utils/RootNavigation';

import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

function FollowUserComponent({ data }: { data: Follow }) {
  const { userId, profileImgUrl, nickname, isFollowing } = data;

  const onPress = useCallback(() => {
    // TODO 타인 프로필 페이지 완성 후 주석 해제 및 콘솔 제거
    console.log(userId);
    // navigate(routes.root.OTHER_USER_PROFILE, {userId});
  }, [userId]);

  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      accessibilityLabel={`${nickname}님 프로필 페이지로 이동`}
      accessibilityRole="button">
      <View style={tailwind`flex-row justify-between items-center`}>
        <View style={tailwind`flex-row items-center`}>
          {profileImgUrl ? (
            <Image
              source={{ uri: profileImgUrl }}
              style={styles.image}
              resizeMethod="scale"
            />
          ) : (
            <View style={styles.profileImageContainer}>
              <UserIcon color={AppColors.gray} width={22} height={22} />
            </View>
          )}
          <Text style={styles.nicknameText}>{nickname}</Text>
        </View>
        <FollowButton
          userId={userId}
          isFollowing={isFollowing}
          nickname={nickname}
        />
      </View>
    </Pressable>
  );
}

export default FollowUserComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 4,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    aspectRatio: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: AppColors.gray,
    backgroundColor: AppColors.background,
  },
  image: {
    height: 48,
    aspectRatio: 1,
    borderRadius: 999,
    resizeMode: 'cover',
  },
  nicknameText: {
    marginLeft: 10,
    ...fontStyles.text14,
    color: AppColors.textPrimary,
  },
});
