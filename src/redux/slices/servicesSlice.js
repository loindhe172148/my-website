// src/redux/slices/servicesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expanded: [true, false, false, false],
  margins: ["30px", "-23px", "-22px", "25px"],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    toggleExpand: (state, action) => {
      const index = action.payload;
      state.expanded = state.expanded.map((item, i) => (i === index ? !item : false));
      state.margins = state.margins.map((margin, i) => (i === index ? (state.expanded[index] ? "30px" : getOriginalMargin(i)) : getOriginalMargin(i)));
    },
  },
});

// Hàm để lấy margin gốc
const getOriginalMargin = (index) => {
  switch (index) {
    case 0: return "-22px";
    case 1: return "-23px";
    case 2: return "-22px";
    case 3: return "25px";
    default: return "0px";
  }
};

export const { toggleExpand } = servicesSlice.actions;
export default servicesSlice.reducer;
