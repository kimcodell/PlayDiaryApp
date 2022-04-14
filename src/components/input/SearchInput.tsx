import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  Pressable,
  Keyboard,
} from 'react-native';
import tailwind from 'twrnc';
import SearchIcon from '../../assets/icons/SearchIcon';
import SearchKeywordTab from '../common/SearchKeywordTab';
import StorageHelper from '../../utils/StorageHelper';
import { navigate } from '../../utils/RootNavigation';
import { routes } from '../../navigations/routes';

import { pushRecentSearch } from '../../utils/AppUtils';
import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';
import AppConstants from '../../utils/AppConstants';

interface SearchInputProps {
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  defaultValue?: string;
  style?: StyleProp<ViewStyle>;
}

function SearchInput({
  isFocused,
  setIsFocused,
  defaultValue,
  style,
}: SearchInputProps) {
  const [searchKeyword, setSearchKeyword] = useState<string>(
    defaultValue ? defaultValue : '',
  );
  const [recentSearchData, setRecentSearchData] = useState<string[]>([]);

  const getRecentSearchStorage = useCallback(async () => {
    const recentSearch = await StorageHelper.getObject(
      AppConstants.STORAGE_KEYS.RECENT_SEARCH,
    ).catch(console.error);
    if (recentSearch) {
      setRecentSearchData(recentSearch);
    }
  }, []);

  useEffect(() => {
    getRecentSearchStorage();
  }, []);

  const updateRecentSearchStorage = useCallback(async (keyword: string[]) => {
    await StorageHelper.storeObject(
      AppConstants.STORAGE_KEYS.RECENT_SEARCH,
      keyword,
    ).catch(console.error);
  }, []);

  const onDeleteAllSearch = useCallback(async () => {
    await StorageHelper.removeData(AppConstants.STORAGE_KEYS.RECENT_SEARCH);
    setRecentSearchData([]);
  }, []);

  const onSearch = useCallback(
    (keyword: string) => async () => {
      const newRecentSearchData = pushRecentSearch(recentSearchData, keyword);
      updateRecentSearchStorage(newRecentSearchData); // TODO 검색 결과로 넘어갔을 때 최근 검색 정보 동기화 잘 되는지 체크
      // TODO 인풋 포커싱과 키보드 나타나는 것 일치하는지. 키보드는 내려갔는데 focusing 되어 있는 경우 요청 결과 데이터들 랜더링 되는지 체크
      Keyboard.dismiss();
      setRecentSearchData(newRecentSearchData);
      setSearchKeyword('');
      navigate(routes.tab.search.SEARCH_RESULT_SCREEN, {
        keyword,
      });
    },
    [recentSearchData],
  );

  return (
    <>
      <View style={[styles.container, style]}>
        <View style={styles.searchInputContainer}>
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
            value={searchKeyword}
            onChangeText={setSearchKeyword}
            onEndEditing={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            //
            // blurOnSubmit
            // clearTextOnFocus={false}
            onSubmitEditing={onSearch(searchKeyword)}
          />
        </View>
      </View>
      {isFocused && recentSearchData.length !== 0 && (
        <View style={styles.recentSearchContainer}>
          <View style={tailwind`flex-row items-center justify-between mb-2.5`}>
            <Text style={styles.headerText}>최근 검색어</Text>
            <Pressable
              onPress={onDeleteAllSearch}
              accessibilityLabel="검색 기록 모두 삭제"
              accessibilityRole="button">
              <Text style={styles.deleteButtonText}>모두 삭제</Text>
            </Pressable>
          </View>
          {recentSearchData.map((keyword: string, index: number) => (
            <SearchKeywordTab
              key={index}
              keyword={keyword}
              onPress={onSearch}
            />
          ))}
        </View>
      )}
    </>
  );
}

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 26,
    paddingBottom: 14,
    backgroundColor: AppColors.white,
  },
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
  recentSearchContainer: {
    paddingTop: 14,
    paddingHorizontal: 20,
  },
  headerText: {
    ...fontStyles.header2,
  },
  deleteButtonText: {
    ...fontStyles.text16,
    color: AppColors.error,
  },
});
