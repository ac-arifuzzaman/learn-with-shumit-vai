import { configureStore } from "@reduxjs/toolkit";
// import videosSlice from '../features/videos/videosSlice';
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    // videos: videosSlice,
    videos: videosReducer,
  },
});
