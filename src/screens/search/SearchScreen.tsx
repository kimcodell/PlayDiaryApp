import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import tailwind from 'twrnc';
import Play from '../../interfaces/Play';
import SearchInput from '../../components/input/SearchInput';
import PlayCommonComponent from '../../components/plays/PlayCommonComponent';

import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';
import StorageHelper from '../../utils/StorageHelper';
import { AppConstants } from '../../utils/AppConstants';

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
  const [recentSearch, setRecentSearch] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      //TODO 요즘 뜨는 작품 요청 API 작업 필요.
      setHotPlayData(test);
    })();
  }, []);

  const getRecentSearch = useCallback(async () => {
    return await StorageHelper.getObject(
      AppConstants.STORAGE_KEYS.RECENT_SEARCH,
    );
  }, []);

  const pushRecentSearch = useCallback(async () => {
    const newList = Array.from(recentSearch).slice(1);
    newList.push(searchKeyword);
    await StorageHelper.storeObject(
      AppConstants.STORAGE_KEYS.RECENT_SEARCH,
      newList,
    );
  }, []);

  useEffect(() => {
    const recentSearch = getRecentSearch();
    setRecentSearch(Array.from(recentSearch));
  }, []);

  return (
    <KeyboardAwareScrollView
      style={tailwind`flex-1`}
      enableOnAndroid={true}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={styles.searchBar}>
        <SearchInput
          inputValue={searchKeyword}
          onChangeInputValue={setSearchKeyword}
          setIsFocused={setIsFocused}
        />
      </View>
      <View style={tailwind`flex-1 p-5`}>
        <Text style={styles.headerText}>요즘 뜨는 작품</Text>
        {isFocused
          ? recentSearch.map((item, index) => <></>)
          : hotPlayData.map((play, index) => (
              <PlayCommonComponent key={index} playData={play} />
            ))}
      </View>
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
});
