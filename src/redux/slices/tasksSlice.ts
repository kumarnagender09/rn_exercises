// Importing createSlice from Redux Toolkit.
// This allows us to create actions + reducers together in one structure.
import { createSlice } from '@reduxjs/toolkit';

// Creating the tasks slice.
// This slice manages a list of tasks (like a Todo List).
const tasksSlice = createSlice({
  // Unique name for this slice. Also used as the action type prefix.
  name: 'tasks',

  // Initial state of the tasks slice.
  // `list` will hold all the task items.
  // Each task will be an object, commonly { id, title }.
  initialState: {
    list: [], 
  },

  // Reducer functions define how we modify the tasks state.
  reducers: {
    // Add a new task to the list.
    // action.payload should contain the entire task object.
    // Example task object: { id: 1, title: "Learn Redux" }
    addTask(state, action) {
      state.list.push(action.payload);
    },

    // Remove a task from the list based on its `id`.
    // action.payload contains the id of the task to be removed.
    removeTask(state, action) {
      state.list = state.list.filter(t => t.id !== action.payload);
    },
  },
});

// Exporting actions generated from the reducers.
// These actions will be used inside UI components.
// Example: dispatch(addTask({ id: 1, title: "Hello" }))
export const { addTask, removeTask } = tasksSlice.actions;

// Exporting the reducer so it can be added to the Redux store.
export default tasksSlice.reducer;
