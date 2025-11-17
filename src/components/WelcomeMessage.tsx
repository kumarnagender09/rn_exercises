import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WelcomeMessageProps {
  title?: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ title = "Welcome to React Native!" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
});

export default WelcomeMessage;
