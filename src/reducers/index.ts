import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import playMusicSlice from "./playMusicSlice";
import audioSlice from "./audioSlice";
import songListSlice from "./songListSlice";
const store: any = configureStore({
  // 合并多个Slice
  reducer: {
    login: loginSlice,
    playMusic: playMusicSlice,
    audio: audioSlice,
    songList: songListSlice,
  },
  //解决检查报错问题
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
