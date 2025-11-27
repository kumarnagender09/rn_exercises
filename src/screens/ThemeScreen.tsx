import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { toggleTheme } from '../redux/slices/themeSlice';

export default function ThemeScreen() {
  const theme = useAppSelector(state => state.theme.mode);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Theme: {theme.toUpperCase()}</Text>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(toggleTheme())}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
  button: { padding: 14, backgroundColor: '#0080ff', borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16 },
});
