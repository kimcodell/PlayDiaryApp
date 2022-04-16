import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import tailwind from 'twrnc';
import SmileEmoticon from '../../assets/icons/SmileEmoticon';
import FollowerFollowingIndex from '../../enums/FollowerFollowingIndex';
import AppColors from '../../utils/AppColors';

function FollowListEmptyComponent({ type }: { type: FollowerFollowingIndex }) {
  return (
    <View style={styles.emptyContainer}>
      <SmileEmoticon />
      <View style={tailwind`mt-3`}>
        {type === FollowerFollowingIndex['팔로워'] ? (
          <>
            <Text style={styles.text}>아직 팔로워가 없습니다.</Text>
            <Text style={styles.text}>공개 후기를 남겨보세요!</Text>
          </>
        ) : (
          <>
            <Text style={styles.text}>아직 팔로우한 사용자가 없습니다.</Text>
            <Text style={styles.text}>다른 사용자를 팔로우해 보세요!</Text>
          </>
        )}
      </View>
    </View>
  );
}

export default FollowListEmptyComponent;

const styles = StyleSheet.create({
  emptyContainer: {
    marginTop: 120,
    alignItems: 'center',
  },
  text: {
    color: AppColors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});
