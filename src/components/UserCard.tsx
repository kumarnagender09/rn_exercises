import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import Button from './Button';

interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export default function UserCard({ user }: { user: User }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />

      <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={styles.name}>{user.name}</Text>
        {/* <Text style={styles.role}>{user.role}</Text> */}
      </View>
      <Button label="Info" onPress={() => Alert.alert(`I am a ${user.role}`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  role: {
    fontSize: 14,
    color: '#444',
  },
});
