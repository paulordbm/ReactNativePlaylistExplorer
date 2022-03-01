import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

export function Artist({ name, imageUrl, albums }) {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        defaultSource={require('./placeholder.png')}
      />
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{albums.length} albums</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  name: {
    color: '#eee',
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#eee',
    fontSize: 16,
  }
});
