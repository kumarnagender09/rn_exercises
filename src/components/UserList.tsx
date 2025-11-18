import React from 'react';
import { FlatList, View } from 'react-native';
import users from '../data/users.json';
import UserCard from './UserCard';
import Header from './Header';
import Button from './Button';

export default function UserList({ onClose }) {
  return (
    <View>
      <Header title="List - JSON Example" />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <UserCard user={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <Button
        label="Close"
        onPress={onClose} // 👈 close modal from inside UserList
      />
    </View>
  );
}
