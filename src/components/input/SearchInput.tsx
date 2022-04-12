import React, { Dispatch, SetStateAction } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import SearchIcon from '../../assets/icons/SearchIcon';

import AppColors from '../../utils/AppColors';

interface SearchInputProps {
  inputValue: string;
  onChangeInputValue: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
  setIsFocused?: Dispatch<SetStateAction<boolean>>;
  defaultValue?: string;
  style?: StyleProp<ViewStyle>;
}

function SearchInput({
  inputValue,
  onChangeInputValue,
  onSubmit,
  setIsFocused,
  defaultValue,
  style,
}: SearchInputProps) {
  return (
    <View style={[styles.searchInputContainer, style]}>
      <SearchIcon color={AppColors.textSecondary} />
      <TextInput
        style={styles.textInput}
        placeholder="작품, 배우, 제작사 등"
        placeholderTextColor={AppColors.textSecondary}
        returnKeyType="search"
        clearButtonMode="always"
        maxLength={64}
        autoCapitalize="none"
        autoCorrect={false}
        value={inputValue}
        onChangeText={onChangeInputValue}
        onEndEditing={() => {
          setIsFocused && setIsFocused(false);
        }}
        onFocus={() => {
          setIsFocused && setIsFocused(true);
        }}
        onSubmitEditing={onSubmit}
        defaultValue={defaultValue && defaultValue}
      />
    </View>
  );
}

export default SearchInput;

const styles = StyleSheet.create({
  searchInputContainer: {
    borderRadius: 6,
    backgroundColor: AppColors.inputBackground,
    paddingHorizontal: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 8,
    padding: 0,
    color: AppColors.textPrimary,
    flex: 1,
  },
});
