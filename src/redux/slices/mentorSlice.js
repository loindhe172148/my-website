import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMentor: 1, 
};

const mentorSlice = createSlice({
  name: 'mentor',
  initialState,
  reducers: {
    setActiveMentor: (state, action) => {
      state.activeMentor = action.payload;
    },
  },
});

export const { setActiveMentor } = mentorSlice.actions;
export default mentorSlice.reducer;
