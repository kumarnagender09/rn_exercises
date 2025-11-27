import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { addTask, removeTask } from '../redux/slices/tasksSlice';

export default function TaskScreen() {
  const [text, setText] = useState('');
  const tasks = useAppSelector(state => state.tasks.list);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks</Text>

      <TextInput
        style={styles.input}
        placeholder="Add task"
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          dispatch(addTask({ id: Date.now(), name: text }));
          setText('');
        }}
      >
        <Text style={styles.addText}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.task}
            onPress={() => dispatch(removeTask(item.id))}
          >
            <Text style={styles.taskText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: '700', marginBottom: 15 },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  addText: { color: '#fff', fontSize: 16, textAlign: 'center' },
  task: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: { fontSize: 16 },
});
