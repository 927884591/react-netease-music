import React, { memo, useMemo, useCallback } from "react";

import PlayOperationsStyle from "./style";

//导入工具
import { playList as playListLocalStorage } from "helpers/play";

//导入store
import { connect, useDispatch } from "react-redux";
//导入action
import { play as playAction } from "@/reducers/playMusicSlice";
import { paused as pausedAction } from "@/reducers/audioSlice";

import {
  StepBackwardFilled,
  PauseCircleFilled,
  PlayCircleFilled,
  StepForwardFilled,
} from "@ant-design/icons";

const PlayOperations = memo((props: any) => {
  const dispatch = useDispatch();
  //从props中获取值
  const { state, paused, audioState, controls } = props;
  const { musicId } = state;
  //从localStorage获取播放数据
  const playList = useMemo(() => playListLocalStorage.getItem(), [musicId]);

  const togglePlayStatus = useCallback(() => {
    if (audioState?.paused) {
      controls?.play();
    } else {
      controls?.pause();
    }
  }, [audioState?.paused, controls]);

  //是否播放方法
  const play = useCallback(
    (prev?: boolean) => {
      const len = playList.length;
      if (!len) {
        return;
      }

      const index = playList.findIndex(({ id }) => id === musicId);
      let nextIndex = -1;

      if (index > -1) {
        nextIndex = prev ? (index - 1 + len) % len : (index + 1) % len;
      } else {
        nextIndex = 0;
      }

      dispatch(
        playAction({
          musicId: playList[nextIndex].id,
          music: playList[nextIndex],
        })
      );
    },
    [playList, musicId, dispatch]
  );

  const playPrev = useCallback(() => play(true), [play]);
  const playNext = useCallback(() => play(), [play]);
  return (
    <PlayOperationsStyle>
      <div className="prev" onClick={playPrev}>
        <StepBackwardFilled />
      </div>
      <div className="pause" onClick={togglePlayStatus}>
        {audioState?.paused ? <PlayCircleFilled /> : <PauseCircleFilled />}
      </div>
      <div className="next" onClick={playNext}>
        <StepForwardFilled />
      </div>
    </PlayOperationsStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    state: state.audio.state,
    paused: state.audio.paused,
    audioState: state.audio.state,
    controls: state.audio.controls,
  };
}
export default connect(mapStateToProps)(PlayOperations);
