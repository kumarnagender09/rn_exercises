import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { addTask, removeTask, fetchTasks } from '../redux/slices/tasksSlice';
import { LightTheme, DarkTheme } from '../theme/appTheme';

export default function TaskScreen() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const tasks = useAppSelector(state => state.tasks.list);
  const loading = useAppSelector(state => state.tasks.loading);
  const mode = useAppSelector(state => state.theme.mode);
  const theme = mode === 'light' ? LightTheme : DarkTheme;

  // // Fetch tasks on component mount
  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

const handleAddTask = async () => {
  if (!text.trim()) return;

  try {
    // 1️⃣ Fetch API tasks via thunk
    const apiTasks: any = await dispatch(fetchTasks()).unwrap();

    // 2️⃣ Combine API tasks with user input
    const combinedTasks = apiTasks.map(task => ({
      id: Date.now() + Math.random(), // unique ID
      title: `${task.title} - ${text}`,
    }));

    // 3️⃣ Dispatch combined tasks to Redux
    combinedTasks.forEach(task => dispatch(addTask(task)));

    // Clear input
    setText('');
  } catch (err) {
    console.error('Failed to fetch tasks:', err);
    // fallback: just add user task
    dispatch(addTask({ id: Date.now(), title: text }));
  }
};


  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>Tasks</Text>

      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.card, color: theme.text },
        ]}
        placeholder="Add task"
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity
        style={[styles.addBtn, { backgroundColor: theme.primary }]}
        onPress={handleAddTask}
      >
        <Text style={styles.addText}>Add Task</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color={theme.primary} />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.task, { backgroundColor: theme.card }]}
              onPress={() => dispatch(removeTask(item.id))}
            >
              <Text style={[styles.taskText, { color: theme.text }]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={{ color: theme.text, marginTop: 10 }}>
              No tasks yet
            </Text>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: '700', marginBottom: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  addBtn: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  addText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  task: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: { fontSize: 16 },
});
