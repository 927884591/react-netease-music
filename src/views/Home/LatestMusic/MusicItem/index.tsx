import React, { memo } from "react";
import PlayIcon from "components/PlayIcon";
import Artists from "components/Artists";
import { IMusicSong } from "apis/types/personalized";
import MusicItemStyle from "./style";

import { createMusic } from "helpers/business";

import Card from "@/components/Card";

//导入store
import { play } from "@/reducers/playMusicSlice";
import { connect, useDispatch } from "react-redux";
interface IProps {
  id: number;
  name: string;
  picUrl: string;
  song: IMusicSong;
  index: number;
}

const MusicItem: React.FC<IProps> = memo(
  ({ id, name, picUrl, song, index, ...others }) => {
    const dispatch = useDispatch();

    //是否处于正在播放状态
    const isMusicActive = false;
    //播放音乐触发
    const playMusic = (id: number) => {
      console.log("播放音乐", id);
      dispatch(
        play({
          musicId: id,
          music: createMusic({
            id,
            name,
            picUrl,
            artists: song.artists,
            duration: song.duration / 1000,
            ...others,
          }),
        })
      );
      // dispatch({
      //   type: ACTIONS.PLAY,
      // payload: {
      //   musicId: id,
      //   music: createMusic({
      //     id,
      //     name,
      //     picUrl,
      //     artists: song.artists,
      //     duration: song.duration / 1000,
      //     ...others,
      //   }),
      // },
      // });
    };

    return (
      <MusicItemStyle>
        <div className="pic" onClick={() => playMusic(id)}>
          {/* <img src={`${picUrl}?param=60y60`} loading="lazy" alt="" />
          <PlayIcon className="playIcon" /> */}
          <Card
            img={`${picUrl}?param=120y120`}
            width={60}
            height={60}
            showPlayIcon
            showAnimation={false}
          ></Card>
        </div>
        {isMusicActive ? (
          <div className="isPlaying">
            T
            {/* <Icon
              icon={audioInfo?.state?.paused ? "volume-off" : "volume-up"}
            /> */}
          </div>
        ) : (
          <div className="order">{index < 9 ? `0${index + 1}` : index + 1}</div>
        )}
        <div className="info">
          <div className="name">{name}</div>
          <Artists artists={song?.artists} />
        </div>
      </MusicItemStyle>
    );
  }
);
function mapStateToProps(state: any) {
  return {
    audio: state.audio,
  };
}
export default connect(mapStateToProps)(MusicItem);
