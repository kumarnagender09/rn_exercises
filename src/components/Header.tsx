import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 44,
    backgroundColor: '#4A90E2'
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700'
  }
});
