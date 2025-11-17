import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ButtonExample() {
  // Step 1: create state to store the text
  const [buttonText, setButtonText] = useState("Click Me");

  // Step 2: create a function that updates the text
  const handlePress = () => {
    setButtonText("Button Pressed!");
  };
  const handleReset = () => {
    setButtonText("Click Me");
  };

  return (
    <View style={styles.container}>
      {/* Step 3: show the text */}
      <Text style={styles.text}>{buttonText}</Text>

      {/* Step 4: button to trigger the change */}
      <Button title="Press Here" onPress={handlePress} />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
