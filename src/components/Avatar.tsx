import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Avatar({
  uri = 'https://robohash.org/f05724337e6bde1fb6796004dde6dc97?set=set4&bgset=&size=400x400',
}) {
  return (
    <View style={styles.avatar}>
      <Image  source={{ uri }} style={styles.image} resizeMode='contain'/>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    padding: 50,
    borderRadius: 40,
    borderColor: 'red',
    borderWidth:10,
    verticalAlign: 'middle',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
