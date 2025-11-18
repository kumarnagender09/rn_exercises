import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface CardProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
  style?: object;
}

const Card: React.FC<CardProps> = ({ title, content, children, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>

      {content ? <Text style={styles.content}>{content}</Text> : null}

      {/* If caller passes children, render them below the content */}
      {children ? <View style={styles.children}>{children}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,

    // Elevation for Android
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111',
  },
  content: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  children: {
    marginTop: 12,
  },
});

export default Card;
