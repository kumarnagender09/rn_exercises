import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Post } from '../types/Post';
import { featchPosts } from '../api/posts.api';
import { useNavigation } from '@react-navigation/native';
import PostItem from '../componenets\'/PostItem';

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  const loadData = async () => {
    try {
      const data = await featchPosts();
      setPosts(data);
    } catch (error) {
      console.log('API error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <PostItem
            item={item}
            onPress={() => navigation.navigate('Details', { post: item })}
          />
        )}
      />
    </View>
  );
}