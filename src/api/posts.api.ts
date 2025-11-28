import { Post } from "../types/Post";
import appieClient from "./client";

 export const featchPosts = async (): Promise<Post[]> => {
    const response = await appieClient.get<Post[]>('/posts');
    return response.data;
  }