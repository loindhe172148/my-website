
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeBox: 'middle', 
};

const activeBoxSlice = createSlice({
  name: 'activeBox',
  initialState,
  reducers: {
    setActiveBox(state, action) {
      state.activeBox = action.payload;
    },
  },
});

export const { setActiveBox } = activeBoxSlice.actions;
export default activeBoxSlice.reducer;
