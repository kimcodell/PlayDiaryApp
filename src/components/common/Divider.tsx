import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';

function Divider() {
  return <View style={styles.divider} />;
}

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 8,
    backgroundColor: AppColors.background,
    borderTopWidth: 1,
    borderTopColor: AppColors.grayLine,
  },
});
