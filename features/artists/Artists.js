import React from 'react';
import { Button, FlatList, View, StyleSheet, Text } from 'react-native';
import { useGetArtistsQuery } from '../../services/music';
import { Artist } from './Artist';

export function Artists() {
  const renderItem = ({ item }) => (
    <Artist name={item.name} imageUrl={item.imageUrl} albums={item.albums} />
  );

  const renderList = (listData) => (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={listData}
        renderItem={renderItem}
        keyExtractor={artist => artist.id}
      />
    </View>
  );

  const renderError = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Error loading data from server.</Text>
      <Button title='Try again' onPress={refetch} />
    </View>
  );

  const renderLoading = () => (
    <View style={styles.container}>
    </View>
  );

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isFetching, refetch } = useGetArtistsQuery();

  return isFetching
    ? renderLoading()
    : error
      ? renderError()
      : renderList(data);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: '#eee',
    fontSize: 16,
    marginBottom: 16,
  },
});
