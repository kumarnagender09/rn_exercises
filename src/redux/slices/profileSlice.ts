// Importing createSlice from Redux Toolkit.
// This helps us create a slice that includes actions + reducers in one place.
import { createSlice } from '@reduxjs/toolkit';

// Creating the Profile Slice.
// This slice manages user's profile data such as name and age.
const profileSlice = createSlice({
  // Name of the slice. This is used internally for identifying actions.
  name: 'profile',

  // Initial state of this slice.
  // This acts as the default values in Redux when the app starts.
  initialState: {
    name: 'Nagender', // Default name
    age: 30,          // Default age
  },

  // Reducer functions define how we update the profile state.
  // Each reducer automatically generates an action with the same name.
  reducers: {
    // Update the user's name.
    // `action.payload` will contain the new name passed from the UI.
    updateName(state, action) {
      state.name = action.payload;
    },

    // Update the user's age.
    // `action.payload` must be a number coming from the component.
    updateAge(state, action) {
      state.age = action.payload;
    },
  },
});

// Export the actions for use inside components.
// Example:
// dispatch(updateName("John"))
export const { updateName, updateAge } = profileSlice.actions;

// Export the reducer to include in the Redux store.
export default profileSlice.reducer;
