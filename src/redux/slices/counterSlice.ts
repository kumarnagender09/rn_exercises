// Importing createSlice from Redux Toolkit.
// This helps us create a slice of the Redux state
// with actions and reducers bundled together.
import { createSlice } from '@reduxjs/toolkit';

// Define the TypeScript type for this slice of state.
// This ensures our counter state always contains a `value: number`.
type CounterState = {
  value: number;
};

// Initial state of the counter slice.
// This is the starting value when the app loads.
const initialState: CounterState = {
  value: 0,
};

// Creating the slice.
// A slice contains:
// 1. A name
// 2. Initial state
// 3. Reducer functions (logic to update state)
export const counterSlice = createSlice({
  // Name of the slice – this becomes the prefix for generated action types.
  name: 'counter',

  // Set the initial counter state defined above.
  initialState,

  // Reducers define HOW the state changes.
  // Each reducer is automatically converted into an action.
  reducers: {
    // Increment action.
    // Redux Toolkit uses Immer.js internally, so we can mutate state directly.
    increment(state) {
      state.value++;
    },

    // Decrement action.
    decrement(state) {
      state.value--;
    },

    // Reset counter back to zero.
    reset(state) {
      state.value = 0;
    },
  },
});

// Exporting individual actions generated from the slice.
// These are used inside components with dispatch(), for example:
// dispatch(increment());
export const { increment, decrement, reset } = counterSlice.actions;

// Exporting the reducer function of this slice.
// This will be added to the store so Redux knows how to update state.
export default counterSlice.reducer;
