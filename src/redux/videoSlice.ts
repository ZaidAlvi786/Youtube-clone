// redux/videoSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Video {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: { url: string };
    };
  };
}

interface VideoState {
  list: Video[];
}

const initialState: VideoState = {
  list: [],
};

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (state:any, action: PayloadAction<Video[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setVideos } = videoSlice.actions;
export default videoSlice.reducer;
