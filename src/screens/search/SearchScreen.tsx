import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import tailwind from 'twrnc';
import useRecentResearch from '../../utils/hooks/useRecentSearch';
import StorageHelper from '../../utils/StorageHelper';
import { navigate } from '../../utils/RootNavigation';
import { routes } from '../../navigations/routes';
import Play from '../../interfaces/Play';
import SearchInput from '../../components/input/SearchInput';
import PlayCommonComponent from '../../components/plays/PlayCommonComponent';
import SearchKeywordTab from '../../components/common/SearchKeywordTab';

import { AppConstants } from '../../utils/AppConstants';
import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

const test: Play[] = [
  {
    playId: 1,
    title: '레베카',
    poster:
      'http://tkfile.yes24.com/Upload2/Display/202108/20210831/wel_mv_hide_s.jpg/dims/quality/70/',
    auditorium: '충무아트센터 대극장',
    auditoriumSize: 1,
    genre: '연극',
    startDate: '2022-05-05T05:00:00.000Z',
    endDate: '2022-05-07T05:00:00.000Z',
  },
  {
    playId: 2,
    title: '지킬앤하이드',
    poster:
      'http://tkfile.yes24.com/Upload2/Display/202108/20210831/wel_mv_hide_s.jpg/dims/quality/70/',
    auditorium: '충무아트센터 대극장',
    auditoriumSize: 1,
    genre: '연극',
    startDate: '2022-04-05T05:00:00.000Z',
    endDate: '2022-04-17T05:00:00.000Z',
  },
  {
    playId: 3,
    title: '아이다',
    poster:
      'http://tkfile.yes24.com/Upload2/Display/202108/20210831/wel_mv_hide_s.jpg/dims/quality/70/',
    auditorium: '충무아트센터 대극장',
    auditoriumSize: 2,
    genre: '연극',
    startDate: '2022-04-02T05:00:00.000Z',
    endDate: '2022-04-20T05:00:00.000Z',
  },
  {
    playId: 3,
    title: '아이다',
    poster:
      'http://tkfile.yes24.com/Upload2/Display/202108/20210831/wel_mv_hide_s.jpg/dims/quality/70/',
    auditorium: '충무아트센터 대극장',
    auditoriumSize: 2,
    genre: '연극',
    startDate: '2022-04-02T05:00:00.000Z',
    endDate: '2022-04-20T05:00:00.000Z',
  },
  {
    playId: 3,
    title: '아이다',
    poster:
      'http://tkfile.yes24.com/Upload2/Display/202108/20210831/wel_mv_hide_s.jpg/dims/quality/70/',
    auditorium: '충무아트센터 대극장',
    auditoriumSize: 2,
    genre: '연극',
    startDate: '2022-04-02T05:00:00.000Z',
    endDate: '2022-04-20T05:00:00.000Z',
  },
  {
    playId: 3,
    title: '아이다',
    poster:
      'http://tkfile.yes24.com/Upload2/Display/202108/20210831/wel_mv_hide_s.jpg/dims/quality/70/',
    auditorium: '충무아트센터 대극장',
    auditoriumSize: 2,
    genre: '연극',
    startDate: '2022-04-02T05:00:00.000Z',
    endDate: '2022-04-20T05:00:00.000Z',
  },
];

function SearchScreen() {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [hotPlayData, setHotPlayData] = useState<Play[]>([]);

  const [recentSearch, pushSearch, clearRecentSearch] = useRecentResearch();

  const onSubmitSearch = useCallback(
    (keyword: string) => async () => {
      pushSearch(keyword);
      await StorageHelper.storeObject(
        AppConstants.STORAGE_KEYS.RECENT_SEARCH,
        recentSearch,
      );
      setSearchKeyword('');
      navigate(routes.tab.search.SEARCH_RESULT_SCREEN, {
        keyword,
      });
    },
    [recentSearch],
  );

  const onDeleteAllSearch = useCallback(async () => {
    await StorageHelper.removeData(AppConstants.STORAGE_KEYS.RECENT_SEARCH);
    clearRecentSearch();
  }, []);

  useEffect(() => {
    (async () => {
      //TODO 요즘 뜨는 작품 요청 API 작업 필요.
      setHotPlayData(test);
    })();
  }, []);

  return (
    <KeyboardAwareScrollView
      style={tailwind`flex-1`}
      enableOnAndroid={true}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      bounces={false}>
      <View style={styles.searchBar}>
        <SearchInput
          inputValue={searchKeyword}
          onChangeInputValue={setSearchKeyword}
          onSubmit={onSubmitSearch(searchKeyword)}
          setIsFocused={setIsFocused}
        />
      </View>
      {!isFocused && hotPlayData.length !== 0 ? (
        <View style={tailwind`flex-1 p-5`}>
          <Text style={styles.headerText}>요즘 뜨는 작품</Text>
          {hotPlayData.map((play, index) => (
            <PlayCommonComponent key={index} playData={play} />
          ))}
        </View>
      ) : (
        <View style={tailwind`flex-1 p-5`}>
          {recentSearch.length !== 0 && (
            <>
              <View
                style={tailwind`flex-row items-center justify-between mb-2.5`}>
                <Text style={[styles.headerText, tailwind`mb-0`]}>
                  최근 검색어
                </Text>
                <Pressable onPress={onDeleteAllSearch}>
                  <Text style={styles.deleteButtonText}>모두 삭제</Text>
                </Pressable>
              </View>
              {recentSearch.map((search, index) => (
                <SearchKeywordTab
                  key={index}
                  keyword={search}
                  onPress={onSubmitSearch}
                />
              ))}
            </>
          )}
        </View>
      )}
    </KeyboardAwareScrollView>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.grayLine,
    backgroundColor: AppColors.white,
  },
  headerText: {
    ...fontStyles.header2,
    marginBottom: 10,
  },
  deleteButtonText: {
    ...fontStyles.text16,
    color: AppColors.error,
  },
});
