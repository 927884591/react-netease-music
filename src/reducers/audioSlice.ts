import { createSlice } from "@reduxjs/toolkit";

import {
  HTMLMediaState,
  HTMLMediaControls,
} from "hooks/utils/createHTMLMediaHook";

export interface IAudioContext {
  audio?: React.ReactElement<any> | undefined;
  state?: HTMLMediaState;
  controls?: HTMLMediaControls;
  ref?: {
    current: HTMLAudioElement | null;
  };
}

const initialState: any = {
  state: {
    buffered: [],
    time: 0,
    duration: 0,
    paused: true,
    muted: false,
    volume: 1,
  },
};
const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    audioInfo(state, action) {
      state.audio = action.payload.audio;
      state.state = action.payload.state;
      state.controls = action.payload.controls;
      state.ref = action.payload.ref;
    },
    time(state, action) {
      state.time = action.payload.time;
    },
    paused(state, action) {
      //如果pused为暂停就暂停
      if (action.payload) {
        state.audioEl?.pause();
      } else {
        state.audioEl?.play();
      }
      state.paused = action.payload;
    },
    muted(state, action) {
      state.muted = action.payload.muted;
    },
  },
});
export const { time, paused, muted, audioInfo } = audioSlice.actions;
export default audioSlice.reducer;
