import React, { memo, useMemo, useCallback } from "react";

import PlayOperationsStyle from "./style";

//导入工具
import { playList as playListLocalStorage } from "helpers/play";

//导入store
import { connect, useDispatch } from "react-redux";
//导入action
import { play as playAction } from "@/reducers/playMusicSlice";
import { paused as pausedAction } from "@/reducers/audioSlice";

import { ReactComponent as PauseIcon } from "assets/icons/pause.svg";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as PreviousIcon } from "assets/icons/previous.svg";
import { ReactComponent as NextIcon } from "assets/icons/next.svg";

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
      console.log(index);

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
        <PreviousIcon width="20px" />
      </div>
      <div className="pause" onClick={togglePlayStatus}>
        {/* {audioState?.paused ? <PlayCircleFilled /> : <PauseCircleFilled />} */}
        {audioState?.paused ? (
          <PlayIcon width="25px"></PlayIcon>
        ) : (
          <PauseIcon width="25px" />
        )}
      </div>
      <div className="next" onClick={playNext}>
        <NextIcon width="20px" />
      </div>
    </PlayOperationsStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    state: state.playMusic,
    paused: state.audio.paused,
    audioState: state.audio.state,
    controls: state.audio.controls,
  };
}
export default connect(mapStateToProps)(PlayOperations);
