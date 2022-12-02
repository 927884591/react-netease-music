import React, { memo, useEffect } from "react";

import useAsyncFn from "@/hooks/useAsyncFn";

import LibraryStyle from "./style";

import userApis, { useInfo as useInfoLocalStorage } from "@/apis/user";
import songApis from "apis/song";
import songlistApis from "apis/songlist";

import Card from "@/components/Card";

import LinkTitle from "@/components/LinkTitle";

const Songlist = memo(() => {
  const userInfo = useInfoLocalStorage.getItem();
  const [likelist, likelistFn] = useAsyncFn(userApis.getLikeList);
  console.log(userInfo);
  const { profile, userId }: any = userInfo;
  const [playlist, playlistFn]: any = useAsyncFn(songApis.getSongDetail);

  const [userSonglist, userSonglistFn]: any = useAsyncFn(
    songlistApis.getUserSonglist
  );
  console.log(999999999, userSonglist);

  useEffect(() => {
    //拿到uid后获取用户喜欢的音乐
    userId && likelistFn({ uid: userId });
    userId && userSonglistFn(userId);
  }, []);
  useEffect(() => {
    likelist && playlistFn(likelist?.value?.ids);
  }, [likelist]);

  return (
    <LibraryStyle>
      <div className="top">
        <div className="title">
          <div className="avatar">
            <Card
              width={50}
              height={50}
              img={profile && profile.avatarUrl}
              showAnimation={false}
            />
          </div>
          <div className="nickname">{profile && profile.nickname}</div>
        </div>
        <div className="likeMuisc">
          <div className="btn">我喜欢的音乐</div>
          <div className="list">
            {playlist &&
              playlist?.value?.map((item: any) => {
                return (
                  <div className="item">
                    <Card
                      key={item.id}
                      img={`${item.picUrl}?param=200y200`}
                      width={50}
                      height={50}
                      showAnimation={false}
                    ></Card>
                    <div className="likeMusicInfo">
                      <div className="name">{item.name}</div>
                      <div className="detail">{item.artists[0].name}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="info">
        <LinkTitle title="全部歌单"></LinkTitle>
        <div className="songlist">
          {userSonglist.value?.collect.map((item: any) => {
            return (
              <div className="item" key={item.id}>
                <Card
                  img={`${item.coverImgUrl}?param=512y512`}
                  showPlayIcon
                  id={item.id}
                ></Card>
                <div className="name">{item.name}</div>
                <div className="author">By {item.creator.nickname}</div>
              </div>
            );
          })}
        </div>
      </div>
    </LibraryStyle>
  );
});

export default Songlist;
