import { configureStore } from "@reduxjs/toolkit";
import mentorReducer from "./slices/mentorSlice";
import contactReducer from "./slices/contactSlice";
import activeBoxReducer from "./slices/activeBoxSlice";
import servicesReducer from './slices/servicesSlice';
import teamReducer from './slices/teamSlice';

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
    contact: contactReducer,
    activeBox: activeBoxReducer,
    services: servicesReducer,
    team: teamReducer,
  },
});

export default store;
