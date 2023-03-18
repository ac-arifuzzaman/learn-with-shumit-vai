/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideos", async () => {
  const videos = await getVideo();
  return videos;
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videoAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideo = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await getVideos();
  return videos;
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
