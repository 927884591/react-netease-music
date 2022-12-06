import React, { memo, useEffect } from "react";

import useAsyncFn from "@/hooks/useAsyncFn";
import songApis from "apis/song";

import DailyStyle from "./style";

import { usePlayAll } from "@/hooks/utils/usePlayAll";

import MusicList from "@/components/MusicList";

import Card from "@/components/Card";
const Daily = memo(() => {
  // 暂且使用这个方案,需优化,因为discoery页面也发了这个请求
  //请求推荐歌单
  const [state, recommendSongFn] = useAsyncFn(songApis.getRecommendSongs);
  console.log(state);
  const { value: res } = state;

  const playAll = usePlayAll();

  useEffect(() => {
    recommendSongFn();
  }, []);

  return (
    <DailyStyle>
      <div className="top">
        <Card
          img={res && res[0].picUrl}
          width={300}
          height={300}
          showPlayIcon
          playlist={res}
        ></Card>
        <div className="info">
          {/* 歌单名称 */}
          <div className="title">{res && res[0].name}</div>
          {/* 歌单详情 */}
          <div className="detail">
            <div className="creator">Playlist By 每日歌曲推荐</div>
            <div className="createTime">每日6:00更新· 一共{res?.length}首</div>
          </div>
          {/* 歌单描述 */}
          <div className="description">根据你的音乐口味生成,每日6:00更新</div>
          {/* 歌单操作 */}
          <div className="action">
            <div
              className="playBtn btn"
              onClick={() => res && playAll(res, true)}
            >
              播放
            </div>
            <div className="likeBtn btn">喜欢</div>
            <div className="moreBtn btn">更多</div>
          </div>
        </div>
      </div>
      <div className="playList">
        <MusicList data={res} onPlayAll={playAll}></MusicList>
      </div>
    </DailyStyle>
  );
});

export default Daily;
