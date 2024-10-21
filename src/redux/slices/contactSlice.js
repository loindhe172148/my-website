import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    activeInfo: 0, 
  },
  reducers: {
    setActiveInfo: (state, action) => {
      state.activeInfo = action.payload; 
    },
  },
});

export const { setActiveInfo } = contactSlice.actions;
export default contactSlice.reducer;