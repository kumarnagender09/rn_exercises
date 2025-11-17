import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeMessage from './src/components/WelcomeMessage';

export default function App() {
  return (
    <View style={styles.screen}>
      <WelcomeMessage title="Hello - React Native Learners!" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
