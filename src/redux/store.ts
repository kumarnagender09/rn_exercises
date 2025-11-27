// Importing `configureStore` from Redux Toolkit.
// This is the recommended way to create a Redux store because
// it automatically sets up good defaults (middleware, devTools, etc.)
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'; // optional

// Importing reducers from each slice of our application.
// Each slice manages a specific feature state.
import counterReducer from './slices/counterSlice';
import profileReducer from './slices/profileSlice';
import themeReducer from './slices/themeSlice';
import tasksReducer from './slices/tasksSlice';

// Creating the Redux store.
// The `reducer` object defines how the entire global state looks.
// Each key inside the reducer becomes a state field in Redux.
// Example final state structure:
// {
//   counter: {...},
//   profile: {...},
//   theme: {...},
//   tasks: {...}
// }
export const store = configureStore({
  reducer: {
    counter: counterReducer, // state.counter → managed by counterSlice
    profile: profileReducer, // state.profile → managed by profileSlice
    theme: themeReducer, // state.theme → managed by themeSlice
    tasks: tasksReducer, // state.tasks → managed by tasksSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// Type for the entire Redux state.
// `store.getState()` returns the full state object.
// `ReturnType<>` extracts that type and saves it as RootState.
// Now anywhere in the app, TypeScript knows our full state shape.
export type RootState = ReturnType<typeof store.getState>;

// Type for dispatch.
// Useful so we get autocomplete and type checking when dispatching actions.
// Example: const dispatch = useAppDispatch();
export type AppDispatch = typeof store.dispatch;
