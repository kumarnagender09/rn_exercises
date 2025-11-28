import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Post } from '../types/Post';

interface Props {
  item: Post;
  onPress: () => void;
}

const PostItem: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  title: { fontSize: 16, fontWeight: '600' },
});