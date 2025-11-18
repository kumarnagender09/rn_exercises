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
  Text,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Avatar from './src/components/Avatar';
import Button from './src/components/Button';
import Card from './src/components/Card';
import Header from './src/components/Header';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={styles.screen}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header title="Welcome to React Native!" />
      <ScrollView contentContainerStyle={styles.container}>
        <Avatar
          uri={
            'https://gravatar.com/avatar/f05724337e6bde1fb6796004dde6dc97?s=400&d=robohash&r=x'
          }
        />

        <Card title="Card Title" content="This is the content of the card." />
        {/* You can also pass children */}
        <Card title="Card with children">
          <Button
            label="Press Me"
            onPress={() => Alert.alert('Button Pressed!')}
          />
        </Card>
        <Button
          label="Press Me"
          onPress={() => Alert.alert('Button Pressed!')}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f2f4f7' },
  container: { padding: 16 },
});
export default App;
