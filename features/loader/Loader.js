import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { musicApi } from '../../services/music';

export function Loader() {
  const { isFetching } = musicApi.endpoints.getArtists.useQueryState();

  return isFetching ? renderLoader() : renderBlank();
}

const renderLoader = () => (
  <View style={styles.fade}>
    <ActivityIndicator size="large" color={"#eee"} />
  </View>
);

const renderBlank = () => <View />;

const styles = StyleSheet.create({
  fade: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(50, 50, 50, .75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
