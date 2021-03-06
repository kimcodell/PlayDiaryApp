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
import LogoutModal from '../../../components/common/modal/LogoutModal';
import ResignModal from '../../../components/common/modal/ResignModal';

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
            <Text style={styles.subtitleText}>??? ??????</Text>
            <TouchableHighlight
              onPress={onPressChangeProfile}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="????????? ??????"
              accessibilityRole="button">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>????????? ??????</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressChangePassword}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="???????????? ??????"
              accessibilityRole="button">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>???????????? ??????</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.tabContainer}
              onPress={onPressLogout}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="????????????"
              accessibilityRole="button">
              <Text style={styles.tabText}>????????????</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.tabContainer}
              onPress={onPressResign}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="?????? ??????"
              accessibilityRole="button">
              <Text style={styles.tabText}>?????? ??????</Text>
            </TouchableHighlight>
          </View>

          <Divider />

          <View style={styles.partContainer}>
            {/* TODO ??? ?????? ?????? ??? ?????? ?????? */}
            <Text style={styles.subtitleText}>OO ??????</Text>
            <TouchableHighlight
              onPress={onPressPrivacyPolicy}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="???????????? ????????????"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>???????????? ????????????</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressTermsOfUse}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="????????? ????????????"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>????????? ????????????</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <View style={[styles.tabContainer, tailwind`justify-between`]}>
              <Text style={styles.tabText}>?????? ??????</Text>
              <Text style={styles.versionText}>{DeviceInfo.getVersion()}</Text>
            </View>
          </View>

          <Divider />

          <View style={styles.partContainer}>
            <Text style={styles.subtitleText}>??????</Text>
            <TouchableHighlight
              onPress={onPressDbRequest}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="DB ??????/?????? ??????"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>DB ??????/?????? ??????</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressCustomerService}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="?????? ??????"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>?????? ??????</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressNotice}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="????????????"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>????????????</Text>
                <ChevronRightIcon height={18} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onPressFAQ}
              underlayColor={AppColors.pressEffect1}
              accessibilityLabel="?????? ?????? ??????"
              accessibilityRole="link">
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>?????? ?????? ??????</Text>
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
