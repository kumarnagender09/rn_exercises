import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { updateName, updateAge } from '../redux/slices/profileSlice';
import { LightTheme, DarkTheme } from '../theme/appTheme';

type ProfileEntry = {
  id: string;
  name: string;
  age: number;
};

export default function ProfileScreen() {
  const dispatch = useAppDispatch();
  const { name, age } = useAppSelector(state => state.profile);
  const mode = useAppSelector(state => state.theme.mode);
  const theme = mode === 'light' ? LightTheme : DarkTheme;

  const [savedProfiles, setSavedProfiles] = useState<ProfileEntry[]>([]);

  // Handlers update Redux directly
  const handleNameChange = (text: string) => dispatch(updateName(text));
  const handleAgeChange = (text: string) => {
    const num = Number(text);
    if (!isNaN(num)) dispatch(updateAge(num));
  };

  const handleSave = () => {
    const newEntry: ProfileEntry = {
      id: Date.now().toString(),
      name,
      age,
    };
    setSavedProfiles(prev => [newEntry, ...prev]);
  };

  const handleReset = () => {
    dispatch(updateName(''));
    dispatch(updateAge(0));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>Profile Info</Text>

      <Text style={[styles.label, { color: theme.text }]}>Name</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.card, color: theme.text }]}
        value={name}
        onChangeText={handleNameChange}
        placeholder="Enter name"
        placeholderTextColor={theme.border}
      />

      <Text style={[styles.label, { color: theme.text }]}>Age</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.card, color: theme.text }]}
        value={String(age)}
        keyboardType="numeric"
        onChangeText={handleAgeChange}
        placeholder="Enter age"
        placeholderTextColor={theme.border}
      />

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: theme.primary }]}
          onPress={handleSave}
        >
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: theme.secondary }]}
          onPress={handleReset}
        >
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.savedHeading, { color: theme.text }]}>
        Saved Profiles
      </Text>

      <FlatList
        data={savedProfiles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.cardText, { color: theme.text }]}>
              Name: {item.name}
            </Text>
            <Text style={[styles.cardText, { color: theme.text }]}>
              Age: {item.age}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ color: theme.text, marginTop: 10 }}>
            No saved profiles yet
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 26, fontWeight: '700', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '500', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  row: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  btn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  savedHeading: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
  card: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: { fontSize: 16 },
});
