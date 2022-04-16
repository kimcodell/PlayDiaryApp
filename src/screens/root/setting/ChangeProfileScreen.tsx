import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/navigatorParam/RootStackParamList';

interface Props
  extends NativeStackScreenProps<
    RootStackParamList,
    'root/mypage/change-profile'
  > {}

function ChangeProfileScreen({
  route: {
    params: { nickname, introduction, profileImgUrl },
  },
}: Props) {
  return (
    <View>
      <Text>{introduction}</Text>
      <Text>{profileImgUrl}</Text>
      <Text>{nickname}</Text>
    </View>
  );
}

export default ChangeProfileScreen;
