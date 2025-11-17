import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterExample() {
  // Step 1: declare state
  const [count, setCount] = useState(0);

  // Step 2: functions to update count
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      {/* Step 3: show the count */}
      <Text style={styles.countText}>Count: {count}</Text>

      {/* Optional conditional rendering */}
      {count === 0 && <Text style={styles.infoText}>Count is at zero!</Text>}

      {/* Step 4: buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Increase Count" onPress={increase} />
        <View style={{ height: 10 }} />
        <Button title="Decrease Count" onPress={decrease} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  buttonContainer: {
    width: 200,
  },
});
