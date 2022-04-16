import React, { useCallback } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import tailwind from 'twrnc';
import SettingIcon from '../../assets/icons/SettingIcon';
import NumOfFollwerAndFollowingButton from './NumOfFollowerAndFollowingButton';
import { navigate } from '../../utils/RootNavigation';
import { routes } from '../../navigations/routes';
import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';
import UserIcon from '../../assets/icons/UserIcon';

interface MyProfileComponentProps {
  profileImgUrl?: string;
  nickname: string;
  introduction?: string;
  follower: number;
  following: number;
}

function MyProfileComponent({
  profileImgUrl,
  nickname,
  follower,
  following,
  introduction,
}: MyProfileComponentProps) {
  const onPressSetting = useCallback(() => {
    navigate(routes.tab.mypage.SETTING_SCREEN);
  }, []);

  const onPressChangeProfile = useCallback(() => {
    navigate(routes.root.CHANGE_PROFILE_SCREEN, {
      nickname,
      introduction,
      profileImgUrl,
    });
  }, [nickname, introduction, profileImgUrl]);

  return (
    <View style={styles.container}>
      <View style={tailwind`flex-row`}>
        {profileImgUrl ? (
          //TODO fast image 적용.
          <Image
            source={{ uri: profileImgUrl }}
            style={styles.profileImage}
            resizeMethod="scale"
          />
        ) : (
          <View style={styles.profileImageContainer}>
            <UserIcon color={AppColors.gray} width={26} height={26} />
          </View>
        )}
        <View style={tailwind`ml-3 flex-grow`}>
          <Pressable
            style={tailwind`self-end`}
            onPress={onPressSetting}
            accessibilityRole="button"
            accessibilityLabel="설정">
            <SettingIcon />
          </Pressable>
          <Text style={styles.nicknameText}>{nickname}</Text>
          <View style={tailwind`flex-row justify-between items-end`}>
            <NumOfFollwerAndFollowingButton
              follower={follower}
              following={following}
            />
            <TouchableHighlight
              style={styles.buttonContainer}
              onPress={onPressChangeProfile}
              underlayColor={AppColors.pressEffect1}
              accessibilityRole="button"
              accessibilityLabel="프로필 수정">
              <Text style={styles.buttonText}>프로필 수정</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      {introduction && (
        <Text style={styles.introductionText}>{introduction}</Text>
      )}
    </View>
  );
}

export default MyProfileComponent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: AppColors.white,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: AppColors.gray,
    backgroundColor: AppColors.background,
  },
  profileImage: {
    borderRadius: 999,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: AppColors.grayLine,
  },
  buttonText: {
    fontSize: 10,
    color: AppColors.textPrimary,
  },
  nicknameText: {
    ...fontStyles.text16,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  introductionText: {
    ...fontStyles.text12,
    color: AppColors.textSecondary,
    marginTop: 18,
  },
});
