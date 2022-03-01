import React from 'react';
import { FlatList, Image, View, StyleSheet, Text } from 'react-native';
import { useGetArtistsQuery } from '../../services/music';

const Artist = ({ name, imageUrl, albums }) => (
  <View>
    <Text>{name}</Text>
    <Image style={styles.artistImage} source={{ uri: imageUrl }} />
  </View>
);

/***********************************************

  "id": 1,
  "name": "Radiohead",
  "imageUrl": "radiohead.jpg",
  "albums": [
    {
      "id": 1,
      "title": "The King of Limbs",
      "imageUrl": "the_king_of_limbs.jpg"
    },
    {
      "id": 2,
      "title": "OK Computer",
      "imageUrl": "ok_computer.jpg"
    }
  ]

***********************************************/

export function Artists() {
  const renderItem = ({ item }) => (
    <Artist name={item.name} imageUrl={item.imageUrl} albums={item.albums} />
  );

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetArtistsQuery();

  console.log(data);
  console.log(error);
  console.log(isLoading);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={artist => artist.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  artistImage: {
    width: 100,
    height: 60,
    resizeMode: "cover"
  },
});
