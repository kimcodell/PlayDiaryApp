import { StyleSheet, Platform } from 'react-native';
import AppColors from '../../utils/AppColors';

const AppStyles = StyleSheet.create({
  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: AppColors.gray,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
});

export default AppStyles;
