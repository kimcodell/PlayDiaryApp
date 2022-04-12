import React, { memo, useCallback, useMemo } from 'react';
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

import { formatDuration } from '../../utils/AppUtils';
import fontStyles from '../../assets/styles/fontStyles';
import AppColors from '../../utils/AppColors';

function PlayCommonComponent({ playData }: { playData: Play }) {
  const { playId, title, poster, genre, auditorium, startDate, endDate } =
    playData;

  const onPress = useCallback(() => {
    console.log(playId, '로 이동');
    navigate(routes.root.PLAY_DETAIL_SCREEN, { playId });
  }, [playId]);

  const duration = useMemo(
    () => formatDuration(startDate, endDate),
    [startDate, endDate],
  );

  return (
    <TouchableHighlight
      style={tailwind`pb-2`}
      onPress={onPress}
      underlayColor={AppColors.pressEffect1}
      accessibilityLabel={`${title} 상세보기`}
      accessibilityRole="tab">
      <View style={styles.container}>
        {/* TODO FastImage 적용. IOS 이미지 테스트 */}
        <Image
          source={{
            uri: poster,
          }}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.contents}>{genre}</Text>
          <Text style={styles.contents}>{auditorium}</Text>
          <Text style={[styles.contents, { fontWeight: '700' }]}>
            {duration}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default memo(PlayCommonComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.grayLine,
    paddingVertical: 10,
  },
  image: {
    borderRadius: 4,
    width: 80,
    height: 108,
  },
  title: {
    ...fontStyles.text16,
    fontWeight: '700',
    color: AppColors.textPrimary,
    marginVertical: 2,
  },
  contents: {
    ...fontStyles.text12,
    color: AppColors.textSecondary,
    marginVertical: 2,
  },
});
