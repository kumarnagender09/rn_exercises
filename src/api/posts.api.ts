import apiClient from './client';
import { Post } from '../types/Post';

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await apiClient.get<Post[]>('/posts');
  return res.data;
};
