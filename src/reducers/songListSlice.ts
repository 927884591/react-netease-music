import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommand: [],
  radar: [],
};

const songListSlice = createSlice({
  name: "songList",
  initialState,
  reducers: {
    recommend(state, action) {
      state.recommand = action.payload;
    },
  },
});
export const { recommend } = songListSlice.actions;
export default songListSlice.reducer;
