import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import tailwind from 'twrnc';
import CryingEmoticon from '../../assets/icons/CryingEmoticon';
import RefreshIcon from '../../assets/icons/RefreshIcon';
import fontStyles from '../../assets/styles/fontStyles';

import AppColors from '../../utils/AppColors';

function HomeListEmptyComponent({
  refreshing = false,
  onRefresh,
}: {
  refreshing: boolean;
  onRefresh?: () => void;
}) {
  return (
    <View style={styles.emptyContainer}>
      {refreshing ? (
        <ActivityIndicator color={AppColors.mainColor} />
      ) : (
        <>
          <CryingEmoticon />
          <Text style={[styles.emptyComponentText, tailwind`mt-3`]}>
            일시적인 오류입니다.
          </Text>
          <Text style={styles.emptyComponentText}>
            새로고침을 시도해 주세요.
          </Text>
          <TouchableHighlight
            style={styles.refreshButton}
            onPress={onRefresh}
            underlayColor={AppColors.pressEffect1}>
            <RefreshIcon />
          </TouchableHighlight>
        </>
      )}
    </View>
  );
}

export default HomeListEmptyComponent;

const styles = StyleSheet.create({
  emptyContainer: {
    marginTop: 120,
    alignItems: 'center',
  },
  emptyComponentText: {
    ...fontStyles.text14,
    lineHeight: 20,
    color: AppColors.textSecondary,
  },
  refreshButton: {
    marginTop: 8,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
    borderWidth: 1,
    borderColor: AppColors.textSecondary,
    borderRadius: 999,
  },
});
