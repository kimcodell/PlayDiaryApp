import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import HomeListEmptyComponent from '../../components/common/HomeListEmptyComponent';
import PlayCommonComponent from '../../components/playComponents/PlayCommonComponent';
import Play from '../../interfaces/Play';
// TODO 테스트용 추후 제거
import { imgUrl1 } from '../../testString';

const test: Play[] = [
  {
    playId: 1,
    title: '레베카',
    poster: imgUrl1,
    auditorium: '충무아트센터 대극장',
    auditoriumSize: 1,
    genre: '연극',
    startDate: '2022-05-05T05:00:00.000Z',
    endDate: '2022-05-07T05:00:00.000Z',
  },
  {
    playId: 2,
    title: '지킬앤하이드',
    poster: imgUrl1,
    auditorium: '충무아트센터 대극장',
    auditoriumSize: 1,
    genre: '연극',
    startDate: '2022-04-05T05:00:00.000Z',
    endDate: '2022-04-17T05:00:00.000Z',
  },
  {
    playId: 3,
    title: '아이다',
    poster: imgUrl1,
    auditorium: '충무아트센터 대극장',
    auditoriumSize: 2,
    genre: '연극',
    startDate: '2022-04-02T05:00:00.000Z',
    endDate: '2022-04-20T05:00:00.000Z',
  },
];

function MusicalListScene({
  sizeOptions,
}: {
  sizeOptions: Array<{ name: string; selected: boolean }>;
}) {
  const [refreshing, setRefreshing] = useState(false);
  const [playData, setPlaysData] = useState<Play[]>([]);
  const [filteredData, setFilteredData] = useState<Play[]>([]);

  useEffect(() => {
    //TODO 데이터 받아오기
    setPlaysData(test);
  }, []);

  useEffect(() => {
    const index = sizeOptions.findIndex(option => option.selected);
    if (index === 0) {
      setFilteredData(playData);
    } else if (index === 1) {
      setFilteredData(playData.filter(play => play.auditoriumSize === 1));
    } else if (index === 2) {
      setFilteredData(playData.filter(play => play.auditoriumSize === 2));
    }
  }, [sizeOptions, playData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    //TODO 데이터 요청 연결
    console.log('데이터 로딩');
    setPlaysData(test);
    setRefreshing(false);
  }, []);

  return (
    <FlatList
      data={filteredData}
      renderItem={({ item }) => <PlayCommonComponent playData={item} />}
      keyExtractor={(_, index) => index.toString()}
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListEmptyComponent={() => (
        <HomeListEmptyComponent refreshing={refreshing} onRefresh={onRefresh} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default MusicalListScene;

const styles = StyleSheet.create({});
