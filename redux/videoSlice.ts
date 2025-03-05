import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  uploader: string;
}

interface VideoState {
  videos: Video[];
}

const initialState: VideoState = {
  videos: [],
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
    },
  },
});

export const { setVideos } = videoSlice.actions;
export default videoSlice.reducer;
