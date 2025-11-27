// Importing createSlice and createAsyncThunk from Redux Toolkit.
// createSlice → simplifies reducers + actions in one structure.
// createAsyncThunk → handles async actions like API calls.
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// -----------------------------
// Async Thunk: fetch tasks from API
// -----------------------------
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks', // action type prefix
  async () => {
    // Fetching 5 tasks from placeholder API
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    return res.json(); // resolves as payload for fulfilled case
  }
);

// -----------------------------
// Slice: Tasks
// -----------------------------
interface Task {
  id: number;
  title: string;
}

interface TasksState {
  list: Task[];
  loading: boolean;
}

const initialState: TasksState = {
  list: [],
  loading: false,
};

const tasksSlice = createSlice({
  name: 'tasks', // unique slice name
  initialState,
  reducers: {
    // Add a task manually
    addTask(state, action) {
      state.list.push(action.payload); // action.payload should be Task
    },
    // Remove a task by ID
    removeTask(state, action) {
      state.list = state.list.filter(task => task.id !== action.payload);
    },
  },
  extraReducers: builder => {
    // Handle async thunk states
    builder
      .addCase(fetchTasks.pending, state => {
        state.loading = true; // API call started
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false; // API call finished
        state.list = action.payload; // replace current list with fetched tasks
      })
      .addCase(fetchTasks.rejected, state => {
        state.loading = false; // API call failed
      });
  },
});

// Exporting the actions to use in components
export const { addTask, removeTask } = tasksSlice.actions;

// Exporting reducer for store
export default tasksSlice.reducer;
