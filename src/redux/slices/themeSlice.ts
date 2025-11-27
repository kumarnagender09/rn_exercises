// Importing createSlice from Redux Toolkit.
// This helps us create a slice that contains state, actions, and reducers.
import { createSlice } from '@reduxjs/toolkit';

// Creating the Theme Slice.
// This slice manages the application's theme style (light or dark).
const themeSlice = createSlice({
  // Unique name for the slice; used for action type prefixes.
  name: 'theme',

  // Initial state for the theme.
  // `mode` defines which theme is active.
  initialState: {
    mode: 'light', // Default theme mode
  },

  // Reducers contain logic to update the theme state.
  reducers: {
    // Toggles the theme between "light" and "dark".
    // No payload needed; it switches automatically.
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

// Exporting the action so components can dispatch it.
// Example: dispatch(toggleTheme())
export const { toggleTheme } = themeSlice.actions;

// Exporting the reducer to include in the store.
export default themeSlice.reducer;
