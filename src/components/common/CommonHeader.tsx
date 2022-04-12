import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon';

import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

function CommonHeader({ headerTitle }: { headerTitle: string }) {
  const navigation = useNavigation();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressBack}>
        <ChevronLeftIcon width={20} height={20} />
      </Pressable>
      <Text style={styles.titleText}>{headerTitle}</Text>
    </View>
  );
}

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    ...fontStyles.text20, //TODO 디자인 완성 후 수정 필요.
    color: AppColors.textPrimary,
    marginLeft: 6,
    fontWeight: '700',
  },
});
