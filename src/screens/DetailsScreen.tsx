import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../hooks/hooks';

export default function DetailsScreen() {
  const counter = useAppSelector(state => state.counter.value);

  const status =
    counter > 0 ? 'Increasing' : counter < 0 ? 'Decreasing' : 'Neutral';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Counter Details</Text>

        <View style={styles.valueBox}>
          <Text style={styles.label}>Current Value</Text>
          <Text style={styles.value}>{counter}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Status</Text>
            <Text style={styles.infoValue}>{status}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Updated</Text>
            <Text style={styles.infoValue}>Just now</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FA',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 25,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  valueBox: {
    alignItems: 'center',
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
  },
  value: {
    fontSize: 48,
    fontWeight: '800',
    color: '#3A8DFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoBox: {
    width: '48%',
    backgroundColor: '#F7FAFE',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E7EF',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});
