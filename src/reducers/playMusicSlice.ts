import { createSlice } from "@reduxjs/toolkit";

import { IMyMusic } from "apis/types/business";
import { getMusicUrl } from "helpers/business";

import {
  MODE,
  setPlayHistory,
  playHistory as playHistoryLocalStorage,
  playMode as playModeLocalStorage,
  playList as playListLocalStorage,
} from "helpers/play";
//定义state类型
export interface IState {
  musicId: number;
  musicUrl: string;
  music?: IMyMusic;
  playMode: MODE;
  showLyric: boolean;
}
//初始化state
const initialState: IState = {
  musicId: 0,
  musicUrl: "",
  playMode: playModeLocalStorage.getItem(),
  showLyric: false,
};
const playMusicSlice: any = createSlice({
  name: "playMusic",
  initialState,
  reducers: {
    //保存播放状态
    play(state, action) {
      if (!action.payload?.keepOrder) {
        console.log(action);

        // setPlayHistory(action.payload?.music);
      }
      state.musicId = action.payload?.musicId;
      state.musicUrl = getMusicUrl(action.payload?.musicId);
      state.music = action.payload?.music;
    },
    //设置播放列表
    setPlayList(state, action) {
      const playList = action.payload?.playList || [];
      playListLocalStorage.setItem(playList);
    },
    //清除播放列表
    clearPlayList(state, action) {
      playListLocalStorage.removeItem();
    },
    //设置播放模式
    setPlayMode(state, action) {
      playModeLocalStorage.setItem(action.payload?.playMode);
      state.playMode = action.payload?.playMode || MODE.PLAY_IN_ORDER;
    },
    //展示歌词
    showLyric(state, action) {
      state.showLyric = true;
    },
    //隐藏歌词
    hideLyric(state, action) {
      state.showLyric = false;
    },
    //清除播放历史记录
    clearPlayHistory(state, action) {
      playHistoryLocalStorage.removeItem();
    },
  },
});

export const {
  play,
  setPlayList,
  clearPlayList,
  setPlayMode,
  showLyric,
  hideLyric,
  clearPlayHistory,
} = playMusicSlice.actions;
//导出reducer
export default playMusicSlice.reducer;
