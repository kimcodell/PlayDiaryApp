import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import tailwind from 'twrnc';
import MyProfileComponent from '../../components/mypageComponents/MyProfileComponent';
import Divider from '../../components/common/Divider';
import ArchiveComponent from '../../components/mypageComponents/ArchiveComponent';
// TODO 테스트용 추후 제거
import { imgUrl1 } from '../../testString';

function MypageScreen() {
  const [refeshing, setRefeshing] = useState<boolean>(false);
  const [data, setData] = useState();

  const onLoadData = useCallback(async () => {
    // TODO API 연동
    // setData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefeshing(true);
    onLoadData();
    setRefeshing(false);
  }, []);

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <SafeAreaView style={tailwind`flex-1`}>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refeshing} />
        }>
        <MyProfileComponent
          // TODO API 연동 후 받아오기. slice 쓰는게 좋으려나??
          profileImgUrl={imgUrl1}
          nickname="홍길동"
          introduction="자기 소개 자기 소개 자기 소개 자기 소개 자기 소개 자기 소개 자기 소개"
          follower={34}
          following={125}
        />
        <Divider />
        <ArchiveComponent />
        <Divider />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MypageScreen;

const styles = StyleSheet.create({});
