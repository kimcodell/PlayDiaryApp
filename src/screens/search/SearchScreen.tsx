import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import tailwind from 'twrnc';
import Play from '../../interfaces/Play';
import SearchInput from '../../components/input/SearchInput';
import PlayCommonComponent from '../../components/plays/PlayCommonComponent';

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
  const [hotPlayData, setHotPlayData] = useState<Play[]>(test);

  useEffect(() => {
    (async () => {
      //TODO 요즘 뜨는 작품 요청 API 작업 필요.
      setHotPlayData([]);
    })();
  }, []);

  //TODO 미완. 스크롤뷰로 할 지 FlatList로 할지. & SearchInput focusing 테스트 필요.
  return (
    <KeyboardAwareScrollView
      style={tailwind`flex-1`}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={tailwind`flex-1`}>
        <View style={styles.searchBar}>
          <SearchInput
            inputValue={searchKeyword}
            onChangeInputValue={setSearchKeyword}
            setIsFocused={setIsFocused}
          />
        </View>
        <View style={tailwind`flex-1 p-5`}>
          <Text style={styles.headerText}>요즘 뜨는 작품</Text>
          {hotPlayData.map((play, index) => (
            <PlayCommonComponent key={index} playData={play} />
          ))}
        </View>
      </View>
    </KeyboardAwareScrollView>

    // //TODO Sticky Header 적용. props 활용 or relative
    // <KeyboardAwareFlatList
    //   // StickyHeaderComponent={() => (
    //   //   <View style={styles.searchBar}>
    //   //     <SearchInput
    //   //       inputValue={searchKeyword}
    //   //       onChangeInputValue={setSearchKeyword}
    //   //       setIsFocused={setIsFocused}
    //   //     />
    //   //   </View>
    //   // )}
    //   ListHeaderComponent={() => (
    //     <>
    //       <View style={styles.searchBar}>
    //         <SearchInput
    //           inputValue={searchKeyword}
    //           onChangeInputValue={setSearchKeyword}
    //           setIsFocused={setIsFocused}
    //         />
    //       </View>
    //       <Text style={styles.headerText}>요즘 뜨는 작품</Text>
    //     </>
    //   )}
    //   stickyHeaderIndices={[0]}
    //   data={hotPlayData}
    //   renderItem={({ item }) => <PlayCommonComponent playData={item} />}
    //   keyExtractor={(_, index) => index.toString()}
    //   bounces={false}
    //   showsVerticalScrollIndicator={false}
    //   contentContainerStyle={tailwind`flex-1`}
    // />
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
    // position: 'relative',
    // top: 0,
  },
  headerText: {
    ...fontStyles.header2,
    // paddingHorizontal: 20,
    // marginTop: 20,
    // marginBottom: 12,
  },
});
