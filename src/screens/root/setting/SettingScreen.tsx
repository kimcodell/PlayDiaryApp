import React, { useCallback, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import tailwind from 'twrnc';
import DeviceInfo from 'react-native-device-info';
import * as RootNavigation from '../../../utils/RootNavigation';
import ChevronRightIcon from '../../../assets/icons/ChevronRightIcon';

import { fontStyles } from '../../../assets/styles/fontStyles';
import AppColors from '../../../utils/AppColors';
import { routes } from '../../../navigations/routes';
import { AppConstants } from '../../../utils/AppConstants';
import Divider from '../../../components/common/Divider';

function SettingScreen() {
  const [isVisibleLogoutModal, setIsVisibleLogoutModal] =
    useState<boolean>(false);
  const [isVisibleResignModal, setIsVisibleResignModal] =
    useState<boolean>(false);

  const onPressChangeProfile = useCallback(() => {
    RootNavigation.navigate(routes.root.CHANGE_PROFILE_SCREEN); //TODO 정상적으로 이동하는지 테스트 필요.
  }, []);

  const onPressChangePassword = useCallback(() => {
    RootNavigation.navigate(routes.root.CHANGE_PASSWORD_SCREEN); //TODO 정상적으로 이동하는지 테스트 필요.
  }, []);

  const onPressLogout = useCallback(() => {
    setIsVisibleLogoutModal(true);
  }, []);

  const onPressResign = useCallback(() => {
    setIsVisibleResignModal(true);
  }, []);

  const onPressPrivacyPolicy = useCallback(() => {
    Linking.openURL(AppConstants.URL.PRIVACY_POLICY);
  }, []);

  const onPressTermsOfUse = useCallback(() => {
    Linking.openURL(AppConstants.URL.TERMS_OF_USE);
  }, []);

  const onPressDbRequest = useCallback(() => {
    Linking.openURL(AppConstants.URL.DB_REQUEST);
  }, []);

  const onPressCustomerService = useCallback(() => {
    Linking.openURL(AppConstants.URL.CS_CENTER);
  }, []);

  const onPressNotice = useCallback(() => {
    Linking.openURL(AppConstants.URL.NOTICE);
  }, []);

  const onPressFAQ = useCallback(() => {
    Linking.openURL(AppConstants.URL.FAQ);
  }, []);

  return (
    <ScrollView contentContainerStyle={tailwind`grow`}>
      <View style={styles.partContainer}>
        <Text style={styles.subtitleText}>내 설정</Text>
        <Pressable style={styles.tabContainer} onPress={onPressChangeProfile}>
          <Text style={styles.tabText}>프로필 수정</Text>
          <ChevronRightIcon height={18} />
        </Pressable>
        <Pressable style={styles.tabContainer} onPress={onPressChangePassword}>
          <Text style={styles.tabText}>비밀번호 변경</Text>
          <ChevronRightIcon height={18} />
        </Pressable>
        <Pressable style={styles.tabContainer} onPress={onPressLogout}>
          <Text style={styles.tabText}>로그아웃</Text>
        </Pressable>
        <Pressable style={styles.tabContainer} onPress={onPressResign}>
          <Text style={styles.tabText}>회원 탈퇴</Text>
        </Pressable>
      </View>

      <Divider />

      <View style={styles.partContainer}>
        {/* TODO 앱 이름 결정 후 워딩 변경 */}
        <Text style={styles.subtitleText}>OO 정보</Text>
        <Pressable style={styles.tabContainer} onPress={onPressPrivacyPolicy}>
          <Text style={styles.tabText}>개인 정보 처리 방침</Text>
          <ChevronRightIcon height={18} />
        </Pressable>
        <Pressable style={styles.tabContainer} onPress={onPressTermsOfUse}>
          <Text style={styles.tabText}>서비스 이용약관</Text>
          <ChevronRightIcon height={18} />
        </Pressable>
        <Pressable style={styles.tabContainer}>
          <Text style={styles.tabText}>버전 정보</Text>
          <Text style={styles.versionText}>{DeviceInfo.getVersion()}</Text>
        </Pressable>
      </View>

      <Divider />

      <View style={styles.partContainer}>
        <Text style={styles.subtitleText}>기타</Text>
        <Pressable style={styles.tabContainer} onPress={onPressDbRequest}>
          <Text style={styles.tabText}>DB 등록/수정 요청</Text>
          <ChevronRightIcon height={18} />
        </Pressable>
        <Pressable style={styles.tabContainer} onPress={onPressCustomerService}>
          <Text style={styles.tabText}>기타 문의</Text>
          <ChevronRightIcon height={18} />
        </Pressable>
        <Pressable style={styles.tabContainer} onPress={onPressNotice}>
          <Text style={styles.tabText}>공지사항</Text>
          <ChevronRightIcon height={18} />
        </Pressable>
        <Pressable style={styles.tabContainer} onPress={onPressFAQ}>
          <Text style={styles.tabText}>FAQ</Text>
          <ChevronRightIcon height={18} />
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  partContainer: {
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.grayLine,
    paddingVertical: 10,
  },
  subtitleText: {
    // ...fontStyles.,
    color: AppColors.textPrimary,
    fontWeight: '700',
  },
  tabText: {
    // ...fontStyles.,
    color: AppColors.textPrimary,
  },
  versionText: {
    //...fontStyles.,
    color: AppColors.textSecondary,
  },
});
