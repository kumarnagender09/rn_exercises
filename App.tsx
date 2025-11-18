/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Modal as Model,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Avatar from './src/components/Avatar';
import Button from './src/components/Button';
import Card from './src/components/Card';
import Header from './src/components/Header';
import UserList from './src/components/UserList';
import { useState } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaProvider style={styles.screen}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header title="Core Components & Styling" />
      <ScrollView contentContainerStyle={styles.container}>
        <Avatar
          uri={
            'https://gravatar.com/avatar/f05724337e6bde1fb6796004dde6dc97?s=400&d=robohash&r=x'
          }
        />

        <Card title="Card Title" content="This is the content of the card." />
        {/* You can also pass children */}
        <Card title="Card with children">
          <Button label="Press Me" onPress={() => setVisible(true)} />
        </Card>
        <Button
          label="Press Me"
          onPress={() => Alert.alert('Button Pressed!')}
        />
      </ScrollView>
      <Model visible={visible} animationType="slide">
        <UserList onClose={() => setVisible(false)} />
      </Model>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f2f4f7' },
  container: { padding: 16 },
});
export default App;
