import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import tailwind from 'twrnc';
import FollowListEmptyComponent from '../../components/followComponents/FollowListEmptyComponent';
import FollowUserComponent from '../../components/followComponents/FollowUserComponent';
import FollowerFollowingIndex from '../../enums/FollowerFollowingIndex';
import Follow from '../../interfaces/Follow';
import { useAppDispatch } from '../../store';
import { getFollowings } from '../../store/thunks/userThunk';
// TODO 테스트용 추후 제거
import { imgUrl1 } from '../../testString';

const test: Follow[] = [
  {
    userId: 5,
    profileImgUrl: undefined,
    nickname: '철수',
    isFollowing: 1,
  },
  {
    userId: 4,
    profileImgUrl: imgUrl1,
    nickname: '닉네임',
    isFollowing: 1,
  },
  {
    userId: 3,
    profileImgUrl: imgUrl1,
    nickname: '영희',
    isFollowing: 1,
  },
  {
    userId: 2,
    profileImgUrl: undefined,
    nickname: '고길동',
    isFollowing: 1,
  },
  {
    userId: 1,
    profileImgUrl: imgUrl1,
    nickname: 'Mr.K',
    isFollowing: 1,
  },
];

function FollowingListScene({ userId }: { userId: number }) {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<Follow[]>([]);

  useEffect(() => {
    //TODO API 연동 필요.
    (async () => {
      // const {payload} = await dispatch(getFollowings(userId));
      // if (payload) {
      //   setData(payload);
      // }
      setData(test); //TODO API 연동 후 수정
    })();
  }, [userId]);

  return (
    <FlatList
      contentContainerStyle={tailwind`px-5`}
      data={data}
      renderItem={({ item }) => <FollowUserComponent data={item} />}
      keyExtractor={(_, index) => index.toString()}
      bounces={false}
      ListEmptyComponent={() => (
        <FollowListEmptyComponent type={FollowerFollowingIndex['팔로잉']} />
      )}
    />
  );
}

export default FollowingListScene;
