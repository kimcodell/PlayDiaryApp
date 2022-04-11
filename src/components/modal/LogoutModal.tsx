import React, { Dispatch, SetStateAction, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import tailwind from 'twrnc';

import AppStyles from '../../assets/styles/AppStyles';
import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

const StatutsBarHeight = Platform.OS === 'ios' ? getStatusBarHeight() : 0;
const Height = Dimensions.get('screen').height;

interface ModalProps {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

function LogoutModal({ isVisible, setVisible }: ModalProps) {
  const onDismiss = useCallback(() => {
    setVisible(false);
  }, []);

  const onLogout = useCallback(() => {
    setVisible(false);
    //TODO 로그아웃 기능 추가.
    console.log('로그아웃');
  }, []);

  return (
    <SafeAreaView>
      <Modal
        style={styles.container}
        isVisible={isVisible}
        onBackdropPress={onDismiss}
        onBackButtonPress={onDismiss}>
        <View style={tailwind`items-center`}>
          <Text style={styles.titleText}>로그아웃</Text>
          <Text style={styles.contentText}>정말 로그아웃 하시겠습니까?</Text>
          <View style={tailwind`flex-row`}>
            <TouchableHighlight
              style={[styles.buttonContainer, tailwind`mr-1`]}
              onPress={onLogout}
              accessibilityLabel="로그아웃"
              accessibilityRole="button"
              underlayColor={AppColors.background}>
              <Text style={styles.buttonText}>로그아웃</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.buttonContainer,
                tailwind`ml-1`,
                { backgroundColor: AppColors.textPrimary },
              ]}
              onPress={onDismiss}
              accessibilityLabel="취소"
              accessibilityRole="button">
              <Text style={[styles.buttonText, { color: AppColors.white }]}>
                취소
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default LogoutModal;

const styles = StyleSheet.create({
  container: {
    ...AppStyles.boxShadow,
    backgroundColor: AppColors.white,
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: Math.ceil(Height * 0.25) + StatutsBarHeight,
    flex: 0,
  },
  titleText: {
    ...fontStyles.text18,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  contentText: {
    ...fontStyles.text16,
    color: AppColors.textSecondary,
    paddingVertical: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: AppColors.textPrimary,
    backgroundColor: AppColors.white,
    height: 48,
  },
  buttonText: {
    ...fontStyles.text14,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
});
