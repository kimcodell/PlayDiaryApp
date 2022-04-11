import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

interface PressableChipProps {
  selected?: boolean;
  onPress?: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
}

function PressableChip({ selected, onPress, text, style }: PressableChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chipContainer,
        selected && { borderColor: AppColors.mainColor },
        style && style,
      ]}>
      <Text
        style={[styles.chipText, selected && { color: AppColors.mainColor }]}>
        {text}
      </Text>
    </Pressable>
  );
}

export default PressableChip;

const styles = StyleSheet.create({
  chipContainer: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: AppColors.grayLine,
    height: 22,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    ...fontStyles.text8,
    fontWeight: '700',
    color: AppColors.textSecondary,
  },
});
