import { StyleSheet, Platform } from 'react-native';

const fontStyles = StyleSheet.create({
  text28: {
    fontSize: 28,
    ...(Platform.OS === 'ios' && { lineHeight: 28 }),
  },
  text20: {
    fontSize: 20,
    ...(Platform.OS === 'ios' && { lineHeight: 20 }),
  },
  text18: {
    fontSize: 18,
    ...(Platform.OS === 'ios' && { lineHeight: 18 }),
  },
  text16: {
    fontSize: 16,
    ...(Platform.OS === 'ios' && { lineHeight: 16 }),
  },
  text14: {
    fontSize: 14,
    ...(Platform.OS === 'ios' && { lineHeight: 14 }),
  },
  text12: {
    fontSize: 12,
    ...(Platform.OS === 'ios' && { lineHeight: 12 }),
  },
  text10: {
    fontSize: 10,
    ...(Platform.OS === 'ios' && { lineHeight: 10 }),
  },
  text8: {
    fontSize: 8,
    ...(Platform.OS === 'ios' && { lineHeight: 8 }),
  },
});

export default fontStyles;
