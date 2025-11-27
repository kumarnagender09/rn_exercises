import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { increment, decrement, reset } from '../redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useNavigation } from '@react-navigation/native';

export default function Counter() {
  const value = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.value}>{value}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.btn, styles.incBtn]}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.decBtn]}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.btnText}>−</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.fullBtn, styles.resetBtn]}
        onPress={() => dispatch(reset())}
      >
        <Text style={styles.fullBtnText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.fullBtn, styles.detailsBtn]}
        onPress={() => navigation.navigate('Details' as never)}
      >
        <Text style={styles.fullBtnText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  value: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 20,
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  incBtn: { backgroundColor: '#4CAF50' },
  decBtn: { backgroundColor: '#FF5252' },
  btnText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  fullBtn: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  resetBtn: { backgroundColor: '#FFA000' },
  detailsBtn: { backgroundColor: '#1976D2' },
  fullBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
