import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Play from '../../interfaces/Play';
import SearchInput from '../../components/input/SearchInput';
import PlayCommonComponent from '../../components/playComponents/PlayCommonComponent';
import { fetchHotPlays } from '../../store/thunks/playThunk';

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
  const dispatch = useDispatch();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [hotPlayData, setHotPlayData] = useState<Play[]>([]);

  useEffect(() => {
    (async () => {
      //TODO 요즘 뜨는 작품 요청 API 작업 필요.
      // const { payload } = await dispatch(fetchHotPlays());
      const payload = test;
      setHotPlayData(payload);
    })();
  }, []);

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      bounces={false}>
      <SearchInput isFocused={isFocused} setIsFocused={setIsFocused} />
      {!isFocused && hotPlayData.length !== 0 && (
        <View style={styles.hotPlayListContainer}>
          <Text style={styles.headerText}>요즘 뜨는 작품</Text>
          {hotPlayData.map((play, index) => (
            <PlayCommonComponent key={index} playData={play} />
          ))}
        </View>
      )}
    </KeyboardAwareScrollView>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  hotPlayListContainer: {
    flex: 1,
    paddingTop: 14,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: AppColors.grayLine,
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
