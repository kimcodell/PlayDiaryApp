import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import Play from '../../interfaces/Play';
import tailwind from 'twrnc';
import { navigate } from '../../utils/RootNavigation';
import { routes } from '../../navigations/routes';

import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

function PlayCardComponent({ playData }: { playData: Play }) {
  const { playId, title, poster, genre, auditorium, startDate, endDate } =
    playData;

  const onPress = useCallback(() => {
    console.log(playId, '로 이동');
    navigate(routes.root.PLAY_DETAIL_SCREEN, { playId });
  }, [playId]);

  return (
    <TouchableHighlight
      style={tailwind`mb-2.5`}
      onPress={onPress}
      underlayColor={AppColors.pressEffect1}
      accessibilityLabel={`${title} 상세보기`}
      accessibilityRole="tab">
      <View style={styles.container}></View>
    </TouchableHighlight>
  );
}

export default PlayCardComponent;

const styles = StyleSheet.create({
  container: {},
});
