import { getRelatedVideos } from "./relatedVideosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchRelatedVidoes = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const videos = await getRelatedVideos({ tags, id });
    return videos;
  }
);

const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVidoes.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVidoes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVidoes.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideoSlice.reducer;
