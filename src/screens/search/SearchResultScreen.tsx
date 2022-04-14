import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import SearchStackParamList from '../../interfaces/navigatorParam/SearchStackParamList';
import Play from '../../interfaces/Play';
import SearchInput from '../../components/input/SearchInput';
import PlayCommonComponent from '../../components/playComponents/PlayCommonComponent';
import { fetchSearchResult } from '../../store/thunks/searchThunk';

import AppColors from '../../utils/AppColors';
import fontStyles from '../../assets/styles/fontStyles';
import { useDispatch } from 'react-redux';

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

function SearchResultScreen({
  route: {
    params: { keyword },
  },
}: NativeStackScreenProps<SearchStackParamList, 'tab/search/result'>) {
  const dispatch = useDispatch();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchResultData, setSearchResultData] = useState<Play[]>([]);

  useEffect(() => {
    //TODO 검색결과 요청 API 연결.
    // const {payload} = dispatch(fetchSearchResult(keyword));
    const payload = test;
    setSearchResultData(payload);
  }, []);

  return (
    <>
      <SearchInput
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        defaultValue={keyword}
        style={styles.searchBarBottom}
      />
      {!isFocused && (
        <KeyboardAwareFlatList
          contentContainerStyle={styles.resultContainer}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={() => (
            <Text style={styles.headerText}>검색 결과</Text>
          )}
          data={searchResultData}
          renderItem={({ item }) => <PlayCommonComponent playData={item} />}
          keyExtractor={(_, index) => index.toString()}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
}

export default SearchResultScreen;

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.grayLine,
    backgroundColor: AppColors.white,
  },
  searchBarBottom: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.grayLine,
  },
  resultContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    ...fontStyles.header2,
    marginTop: 14,
    marginBottom: 10,
  },
  deleteButtonText: {
    ...fontStyles.text16,
    color: AppColors.error,
  },
});
