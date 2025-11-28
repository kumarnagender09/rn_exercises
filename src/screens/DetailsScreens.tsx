import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Post } from '../types/Post';

type Params = {
  Details: { post: Post };
};

export default function DetailsScreen() {
  const route = useRoute<RouteProp<Params, 'Details'>>();
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 10 },
  body: { fontSize: 16 },
});