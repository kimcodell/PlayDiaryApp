import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { SearchStackParamList } from '../../interfaces/SearchStackParamList';

function SearchResultScreen({
  route: {
    params: { keyword },
  },
}: NativeStackScreenProps<SearchStackParamList, 'tab/search/result'>) {
  return (
    <View>
      <Text>{keyword} 검색 결과</Text>
    </View>
  );
}

export default SearchResultScreen;
