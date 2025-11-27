import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { increment, decrement, reset } from '../redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useNavigation } from '@react-navigation/native';
import { DarkTheme, LightTheme } from '../theme/appTheme';

export default function Counter() {
  const value = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  // Get current theme mode from Redux
  const mode = useAppSelector(state => state.theme.mode);
  const theme = mode === 'light' ? LightTheme : DarkTheme;

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.title, { color: theme.text }]}>Counter</Text>
      <Text style={[styles.value, { color: theme.secondary }]}>{value}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: theme.secondary }]}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: theme.secondary }]}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.btnText}>−</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.fullBtn, { backgroundColor: theme.secondary }]}
        onPress={() => dispatch(reset())}
      >
        <Text style={styles.fullBtnText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.fullBtn, { backgroundColor: theme.secondary }]}
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
  },
  value: {
    fontSize: 40,
    fontWeight: 'bold',
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
  fullBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
