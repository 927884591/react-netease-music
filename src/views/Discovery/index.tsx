import Card from "@/components/Card";
import LinkTitle from "@/components/LinkTitle";
import React, { memo, useEffect, useState } from "react";

import useAsyncFn from "@/hooks/useAsyncFn";
import playListApi from "apis/playList";
import songApis from "apis/song";
import artistApis from "apis/artists";
import albumApis from "apis/album";

import DiscoveryStyle from "./style";

import { useDispatch } from "react-redux";
import { recommend as recommendAction } from "@/reducers/songListSlice";

const Discovery = memo(() => {
  const dispatch = useDispatch();
  //请求推荐歌单
  const [state, recommendSongFn] = useAsyncFn(songApis.getRecommendSongs);
  //请求歌单
  const [playList, playListFn] = useAsyncFn(playListApi.getPlayList);
  //请求艺人
  const [artists, artistsFn]: any = useAsyncFn(artistApis.topListOfArtists);

  //请求banklist
  const [bankList, bankListFn]: any = useAsyncFn(playListApi.getTopList);

  //请求新专辑
  const [newAlbum, newAlbumFn] = useAsyncFn(albumApis.getNewAlbums);

  //获取封面
  const radarImg = playList.value && playList.value.playlist.coverImgUrl;

  //推荐艺人
  const [recommendArtists, setRecommendArtists]: any = useState({});

  const [topList, setTopList] = useState({
    items: [],
    ids: [19723756, 3778678, 60198, 3812895, 60131],
  });

  const { value: result } = state;
  //页面请求
  useEffect(() => {
    //获取推荐歌曲
    recommendSongFn();
    //官方没有找到专门雷达歌单的接口,自己找的id
    playListFn(3136952023);
    //获取歌手列表
    artistsFn(null);
    //请求排行歌单
    bankListFn();
    //请求新专辑
    newAlbumFn({
      area: "ALL",
      limit: 10,
    });
  }, []);
  //当state发生改变时触发
  useEffect(() => {
    dispatch(recommendAction(state.value));
  }, [state]);
  //当艺人数据发生变化时执行
  useEffect(() => {
    if (artists) {
      let indexs: any = [];
      let items = [];
      while (indexs.length < 6) {
        let tmp = ~~(Math.random() * 100);
        if (!indexs.includes(tmp)) indexs.push(tmp);
      }
      items = artists?.value?.list?.artists.filter((_: any, index: any) =>
        indexs.includes(index)
      );
      setRecommendArtists({ indexs, items });
    }
    return;
  }, [artists]);

  //bank
  useEffect(() => {
    if (bankList?.value) {
      let items = [];
      items = bankList.value.list.filter((l: any) => {
        return topList.ids.includes(l.id);
      });
      setTopList({ ...topList, items });
    }
  }, [bankList]);

  return (
    <DiscoveryStyle>
      <div className="forYou">
        <LinkTitle title="For You"></LinkTitle>
        <div className="recommend">
          <Card img={result && result[0]?.picUrl} width={400}></Card>
          <Card
            img={playList && radarImg}
            showPlayIcon
            id={playList?.value?.playlist.id}
          ></Card>
        </div>
      </div>
      <div className="recommandArtist">
        <LinkTitle title="推荐艺人"></LinkTitle>
        {/* 拿到数据需要map */}
        <div className="artist">
          {recommendArtists?.items &&
            recommendArtists?.items.map((item: any) => {
              return (
                <Card
                  key={item.picId}
                  img={`${item.picUrl}?param=400y400`}
                  name={item.name}
                  width={150}
                  height={150}
                  borderRadius={150 / 2}
                  showPlayIcon
                ></Card>
              );
            })}
        </div>
      </div>
      <div className="bank">
        <LinkTitle title="排行榜" checkAll></LinkTitle>
        <div className="bankList">
          {topList?.items &&
            topList?.items.map((item: any) => {
              return (
                <Card
                  key={item.coverImgId}
                  img={`${item.coverImgUrl}?param=400y400`}
                  showPlayIcon
                  id={item.id}
                ></Card>
              );
            })}
        </div>
      </div>

      <div className="newAlbum">
        <LinkTitle title="新专速推"></LinkTitle>
        {/* 拿到数据需要map */}
        <div className="newAlbumList">
          {newAlbum.value &&
            newAlbum.value.map((item: any) => {
              return (
                <Card
                  key={item.pirId}
                  img={`${item.picUrl}?param=400y400`}
                  name={item.name}
                  author={item.artist.name}
                  showPlayIcon
                  id={item.id}
                ></Card>
              );
            })}
        </div>
      </div>
    </DiscoveryStyle>
  );
});

export default Discovery;
