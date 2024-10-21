import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    activeInfo: 0, // Chỉ số thông tin đang hoạt động
  },
  reducers: {
    setActiveInfo: (state, action) => {
      state.activeInfo = action.payload; // Cập nhật active info
    },
  },
});

export const { setActiveInfo } = contactSlice.actions;
export default contactSlice.reducer;
