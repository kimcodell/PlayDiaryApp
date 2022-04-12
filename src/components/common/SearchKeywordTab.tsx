import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import fontStyles from '../../assets/styles/fontStyles';
import { routes } from '../../navigations/routes';
import AppColors from '../../utils/AppColors';
import { navigate } from '../../utils/RootNavigation';

function SearchKeywordTab({
  keyword,
  onPress,
}: {
  keyword: string;
  onPress: (keyword: string) => () => void;
}) {
  return (
    <TouchableHighlight
      onPress={onPress(keyword)}
      style={styles.container}
      underlayColor={AppColors.pressEffect1}
      accessibilityLabel={`최근 검색한 ${keyword} 검색`}
      accessibilityRole="tab">
      <Text style={styles.text}>{keyword}</Text>
    </TouchableHighlight>
  );
}

export default SearchKeywordTab;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomColor: AppColors.grayLine,
    borderBottomWidth: 1,
  },
  text: {
    ...fontStyles.text14,
    color: AppColors.textPrimary,
  },
});
