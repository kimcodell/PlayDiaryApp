import React, { useCallback, useState } from 'react';
import {
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  SafeAreaView,
} from 'react-native';
import tailwind from 'twrnc';
import DeviceInfo from 'react-native-device-info';
import * as RootNavigation from '../../../utils/RootNavigation';
import ChevronRightIcon from '../../../assets/icons/ChevronRightIcon';
import Divider from '../../../components/common/Divider';
import LogoutModal from '../../../components/modal/LogoutModal';
import ResignModal from '../../../components/modal/ResignModal';

import fontStyles from '../../../assets/styles/fontStyles';
import AppColors from '../../../utils/AppColors';
import { routes } from '../../../navigations/routes';
import AppConstants from '../../../utils/AppConstants';

function SettingScreen() {
  const [isVisibleLogoutModal, setIsVisibleLogoutModal] =
    useState<boolean>(false);
  const [isVisibleResignModal, setIsVisibleResignModal] =
    useState<boolean>(false);

  const onPressChangeProfile = useCallback(() => {
    RootNavigation.navigate(routes.root.CHANGE_PROFILE_SCREEN);
  }, []);

  const onPressChangePassword = useCallback(() => {
    RootNavigation.navigate(routes.root.CHANGE_PASSWORD_SCREEN);
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
    <SafeAreaView style={tailwind`flex-1`}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View>
          <View style={styles.partContainer}>
            <Text style={styles.subtitleText}>내 설정</Text>
            <TouchableHighlight
              onPress={onPressChangeProfile}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="프로필 수정"
              accessibilityRole="button">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>프로필 수정</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressChangePassword}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="비밀번호 변경"
              accessibilityRole="button">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>비밀번호 변경</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.tabContainer}
              onPress={onPressLogout}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="로그아웃"
              accessibilityRole="button">
              <Text style={styles.tabText}>로그아웃</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.tabContainer}
              onPress={onPressResign}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="회원 탈퇴"
              accessibilityRole="button">
              <Text style={styles.tabText}>회원 탈퇴</Text>
            </TouchableHighlight>
          </View>

          <Divider />

          <View style={styles.partContainer}>
            {/* TODO 앱 이름 결정 후 워딩 변경 */}
            <Text style={styles.subtitleText}>OO 정보</Text>
            <TouchableHighlight
              onPress={onPressPrivacyPolicy}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="개인정보 처리방침"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>개인정보 처리방침</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressTermsOfUse}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="서비스 이용약관"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>서비스 이용약관</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <View style={[styles.tabContainer, tailwind`justify-between`]}>
              <Text style={styles.tabText}>버전 정보</Text>
              <Text style={styles.versionText}>{DeviceInfo.getVersion()}</Text>
            </View>
          </View>

          <Divider />

          <View style={styles.partContainer}>
            <Text style={styles.subtitleText}>기타</Text>
            <TouchableHighlight
              onPress={onPressDbRequest}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="DB 등록/수정 요청"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>DB 등록/수정 요청</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressCustomerService}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="기타 문의"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>기타 문의</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressNotice}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="공지사항"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>공지사항</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressFAQ}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="자주 묻는 질문"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>자주 묻는 질문</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <LogoutModal
          isVisible={isVisibleLogoutModal}
          setVisible={setIsVisibleLogoutModal}
        />
        <ResignModal
          isVisible={isVisibleResignModal}
          setVisible={setIsVisibleResignModal}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  partContainer: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 10,
  },
  subtitleText: {
    ...fontStyles.text16,
    color: AppColors.textPrimary,
    fontWeight: '700',
    marginBottom: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    ...fontStyles.text14,
    color: AppColors.textPrimary,
  },
  versionText: {
    ...fontStyles.text12,
    color: AppColors.textSecondary,
  },
});
