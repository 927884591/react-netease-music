import React, { memo, useMemo, useCallback, useEffect } from "react";
import { Layout } from "antd";
import { MODE, playList as playListLocalStorage } from "helpers/play";
//导入路由
import { useRoutes } from "react-router-dom";
import { routes } from "@/router";

//导入store
import { connect, useDispatch } from "react-redux";
import { play as playAction } from "reducers/playMusicSlice";
import { audioInfo as audioInfoAction } from "@/reducers/audioSlice";
import useAudio from "hooks/useAudio";

import ContentStyle from "./style";

import { IMyMusic } from "apis/types/business";

//使用antd组件
const { Content } = Layout;
const ContentNa = memo((props: any) => {
  const { musicId, musicUrl, playMode } = props;
  const dispatch = useDispatch();

  const playList = useMemo(() => playListLocalStorage.getItem(), [musicId]);
  //拿到封装好的audio
  const [audio, audioState, audioControls, audioRef] = useAudio({
    src: musicUrl,
    autoPlay: true,
    onEnded: () => playNextMusic(),
    onError: () => {
      if (playMode === MODE.SINGLE_CYCLE) {
        return;
      }
      playNextMusic();
    },
  });
  //需要提交最新的状态提交到store中
  useEffect(() => {
    dispatch(
      audioInfoAction({
        audio,
        state: audioState,
        controls: audioControls,
        ref: audioRef,
      })
    );
  }, [musicUrl, audio, audioState, audioControls, audioRef]);

  //播放音乐改变store状态
  const playMusic = useCallback(
    (index: number) => {
      dispatch(
        playAction({
          musicId: playList[index].id,
          music: playList[index],
        })
      );
    },
    [playList]
  );

  //播放下一首音乐逻辑
  const playNextMusic = useCallback(() => {
    switch (playMode) {
      case MODE.PLAY_IN_ORDER: {
        const idx = playList.findIndex(({ id }: IMyMusic) => id === musicId);
        if (playList.length) {
          const nextIdx = idx > -1 ? (idx + 1) % playList.length : 0;
          playMusic(nextIdx);
        }
        return;
      }
      case MODE.SINGLE_CYCLE: {
        audioControls.play();
        return;
      }
      case MODE.SHUFFLE_PLAYBACK: {
        if (playList.length) {
          const randomIdx = Math.floor(Math.random() * playList.length);
          playMusic(randomIdx);
        }
        return;
      }
      default:
        return;
    }
  }, [musicId, playMode, audioControls, playList]);
  return (
    <ContentStyle>
      {audio}
      <Content
        style={{
          margin: "24px 16px 0",
          overflow: "initial",
        }}
      >
        {/* 使用路由 */}
        {useRoutes(routes)}
      </Content>
    </ContentStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    musicUrl: state.playMusic.musicUrl,
    musicId: state.playMusic.musicId,
    playMode: state.playMusic.playMode,
  };
}

export default connect(mapStateToProps)(ContentNa);
