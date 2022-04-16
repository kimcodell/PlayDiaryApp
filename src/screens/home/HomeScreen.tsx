import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TabView, SceneRendererProps } from 'react-native-tab-view';
import tailwind from 'twrnc';
import VerticalBarIcon from '../../assets/icons/VerticalBarIcon';
import PressableChip from '../../components/common/chip/PressableChip';
import PlayListScene from './PlayListScene';
import MusicalListScene from './MusicalListScene';
import NullComponent from '../../components/common/NullComponent';

import AppColors from '../../utils/AppColors';
import fontStyles from '../../assets/styles/fontStyles';

function HomeScreen() {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    { key: 'musical', title: '뮤지컬' },
    { key: 'play', title: '연극' },
  ]);
  const [sizeOptions, setSizeOptions] = useState<
    Array<{ name: string; selected: boolean }>
  >([
    {
      name: '전체',
      selected: true,
    },
    {
      name: '대극장',
      selected: false,
    },
    {
      name: '중/소극장',
      selected: false,
    },
  ]);

  const renderScene = useCallback(
    ({ route }: { route: any }) => {
      switch (route.key) {
        case 'musical':
          return <MusicalListScene sizeOptions={sizeOptions} />;
        case 'play':
          return <PlayListScene sizeOptions={sizeOptions} />;
        default:
          return null;
      }
    },
    [sizeOptions],
  );

  const onPressOption = useCallback(
    (index: number) => () => {
      setSizeOptions(prev => {
        const newState = prev.map(option => ({ ...option, selected: false }));
        newState[index].selected = true;
        return newState;
      });
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabBarContainer}>
        <TouchableOpacity
          onPress={() => setIndex(0)}
          activeOpacity={0.8}
          accessibilityLabel="뮤지컬"
          accessibilityRole="tab">
          <Text
            style={[
              styles.tabLabelText,
              index === 0 && { color: AppColors.textPrimary },
            ]}>
            뮤지컬
          </Text>
        </TouchableOpacity>
        <VerticalBarIcon color={AppColors.textSecondary} />
        <TouchableOpacity
          onPress={() => setIndex(1)}
          activeOpacity={0.8}
          accessibilityLabel="연극"
          accessibilityRole="tab">
          <Text
            style={[
              styles.tabLabelText,
              index === 1 && { color: AppColors.textPrimary },
            ]}>
            연극
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sizeOptionContainer}>
        <Text style={styles.sizeOptionTitleText}>극장 규모</Text>
        {sizeOptions.map((option, index) => (
          <PressableChip
            key={index}
            text={option.name}
            selected={option.selected}
            onPress={onPressOption(index)}
            style={tailwind`mx-0.5`}
          />
        ))}
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={NullComponent}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    paddingTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabLabelText: {
    ...fontStyles.text28,
    color: AppColors.textSecondary,
    fontWeight: '700',
  },
  sizeOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  sizeOptionTitleText: {
    fontSize: 14,
    color: AppColors.textPrimary,
    fontWeight: '700',
    marginRight: 6,
  },
});
