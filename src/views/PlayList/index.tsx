import { IAlbum, IMusic } from "@/apis/types/business";
import React, { memo, useEffect, useState } from "react";
import Card from "components/Card";

import { useParams, useLocation } from "react-router-dom";

import useAsyncFn from "@/hooks/useAsyncFn";

import playListApis from "apis/playList";
import songApis from "apis/song";

import PlayListStyle from "./style";
import MusicList from "@/components/MusicList";

import { usePlayAll } from "@/hooks/utils/usePlayAll";

import { formatDatetime } from "@/helpers/time";
const PlayList = memo(() => {
  //拿到路由传递过来的参数
  const params = useParams();
  const location = useLocation();
  const { id } = params;
  const { state } = location;

  const playAll = usePlayAll();
  //拿到歌单的详情,可以获取到所有歌曲的id
  const [playList, playListFn] = useAsyncFn(playListApis.getPlayList);
  //根据id获取到所有的歌曲的详情
  const [songList, songListFn]: any = useAsyncFn(songApis.getSongDetail);

  const [ids, setIds] = useState([]);
  //拿到数据中的playlist
  const [playListToDOM, setPlayListToDOM]: any = useState([]);

  //拿出playlist中的trackId
  useEffect(() => {
    let ids = [];
    ids = playList.value?.playlist?.trackIds.map((item: any) => item.id);
    setIds(ids);
    setPlayListToDOM(playList?.value?.playlist);
  }, [playList]);
  //请求歌单信息
  useEffect(() => {
    playListFn(Number(id));
  }, []);
  //请求歌单歌曲信息
  useEffect(() => {
    songListFn(ids);
  }, [ids]);
  return (
    <PlayListStyle>
      <div className="top">
        <Card
          img={playListToDOM && playListToDOM?.coverImgUrl}
          width={300}
          height={300}
          showPlayIcon
          playlist={songList?.value}
        ></Card>
        <div className="info">
          {/* 歌单名称 */}
          <div className="title">{playListToDOM && playListToDOM?.name}</div>
          {/* 歌单详情 */}
          <div className="detail">
            <div className="creator">
              Playlist By {playListToDOM?.creator?.nickname}
            </div>
            <div className="createTime">
              最后更新的时间{formatDatetime(playListToDOM?.updateTime)}· 一共
              {playListToDOM?.trackIds?.length}首
            </div>
          </div>
          {/* 歌单描述 */}
          <div className="description">{playListToDOM?.description}</div>
          {/* 歌单操作 */}
          <div className="action">
            <div
              className="playBtn btn"
              onClick={() => songList?.value && playAll(songList?.value, true)}
            >
              播放
            </div>
            <div className="likeBtn btn">喜欢</div>
            <div className="moreBtn btn">更多</div>
          </div>
        </div>
      </div>
      <div className="playList">
        <MusicList data={songList.value} onPlayAll={playAll}></MusicList>
      </div>
    </PlayListStyle>
  );
});

export default PlayList;
