import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMentor: 1, 
  currentIndex: 0,
  images: [], // Initialize with an empty array
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setActiveMentor: (state, action) => {
      state.activeMentor = action.payload;
    },
    nextImage: (state) => {
      if (state.images.length > 0) {  // Check if images array is not empty
        state.currentIndex = (state.currentIndex + 1) % state.images.length;
      }
    },
    prevImage: (state) => {
      if (state.images.length > 0) {  // Check if images array is not empty
        state.currentIndex = (state.currentIndex - 1 + state.images.length) % state.images.length;
      }
    },
    setImages: (state, action) => {
      state.images = action.payload; 
    },
  },
});

export const { setActiveMentor, nextImage, prevImage, setImages } = teamSlice.actions;
export default teamSlice.reducer;
