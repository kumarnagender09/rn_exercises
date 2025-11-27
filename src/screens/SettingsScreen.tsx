import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reset } from '../redux/slices/counterSlice';
import { useAppDispatch } from '../hooks/hooks';

export default function SettingsScreen() {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Counter Controls</Text>

          <TouchableOpacity
            style={styles.resetBtn}
            onPress={() => dispatch(reset())}
          >
            <Text style={styles.btnText}>Reset Counter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FA',
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    fontWeight: '500',
  },
  resetBtn: {
    backgroundColor: '#E53935',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
