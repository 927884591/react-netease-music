import React, { memo, useMemo, useEffect, useState, useRef } from "react";

import songApis from "apis/song";
import useAsyncFn from "hooks/useAsyncFn";
import { formatLyric } from "helpers/lyric";

import LyricStyle from "./style";

import { connect } from "react-redux";

import cn from "classnames";

//定义常量
const HIGHLIGHT_LYRIC_TOP = 160;
const LYRIC_LINE_HEIGHT = 45;

const Lyric = memo((props: any) => {
  const lyricRef: any = useRef(null);

  const { audioInfo, musicId, showLyric } = props;

  const [line, setLine] = useState(0);

  const [lyricState, getLyricFn] = useAsyncFn(songApis.getLyric);
  //给歌词格式化
  const lines = useMemo(
    () => formatLyric(lyricState.value?.lyric),
    [lyricState?.value?.lyric]
  );
  //获取歌词
  useEffect(() => {
    if (musicId && showLyric) {
      getLyricFn(musicId);
    }
  }, [musicId, showLyric]);

  //歌词跳转
  useEffect(() => {
    if (!audioInfo.state?.paused) {
      window.requestAnimationFrame(() => {
        //获取store的时间,如果没有时间就是0
        const audioTime = audioInfo?.time || 0;
        //查找歌词的Index在第几行
        const lineIndex = lines.findIndex(([time], index) => {
          const prevTime = index - 1 >= 0 ? lines[index - 1][0] : time;
          const nextTime =
            index + 1 < lines.length ? lines[index + 1][0] : time;
          if (prevTime <= audioTime && nextTime >= audioTime) {
            return true;
          }
        });
        //如果查找到index的话就scroll到该行
        if (lineIndex > -1) {
          const scrollHeight =
            LYRIC_LINE_HEIGHT * lineIndex - HIGHLIGHT_LYRIC_TOP;
          lyricRef.current?.scrollTo({
            top: scrollHeight < 0 ? 0 : scrollHeight,
            behavior: "smooth",
          });
          setLine(lineIndex);
        }
      });
    }
  }, [audioInfo.time, lines]);

  return (
    <LyricStyle ref={lyricRef}>
      {lyricState.loading ? (
        "加载中"
      ) : (
        <>
          {lines.map(([time, lyric], index) => {
            return (
              <div
                key={time}
                className={cn("line", line === index && "active")}
              >
                {lyric}
              </div>
            );
          })}
        </>
      )}
    </LyricStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    audioInfo: state.audio.state,
    musicId: state.playMusic.musicId,
    showLyric: state.playMusic.showLyric,
  };
}
export default connect(mapStateToProps)(Lyric);
