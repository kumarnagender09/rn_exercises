import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Post } from '../types/Post';
import { useNavigation } from '@react-navigation/native';
import PostItem from '../components/Posttem';
import { fetchPosts } from '../api/posts.api';

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  const loadData = async () => {
    try {
      const data = await fetchPosts();
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
