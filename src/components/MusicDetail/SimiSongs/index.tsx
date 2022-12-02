import React, { memo } from "react";

import PlayIcon from "components/PlayIcon";
import { IMusic } from "apis/types/business";

import { createMusicWithAlbum } from "helpers/business";

import { play } from "@/reducers/playMusicSlice";
import { useDispatch } from "react-redux";

import SimiSongsStyle from "./style";

import Card from "@/components/Card";

import cn from "classnames";

const SimiSongs = memo((props: any) => {
  const { data } = props;

  const dispatch = useDispatch();

  const handleItemClick = (music: IMusic) => {
    dispatch(
      play({
        musicId: music.id,
        music: createMusicWithAlbum(music),
      })
    );
  };
  return (
    <SimiSongsStyle>
      {data.map((item: any) => {
        const { album, name, id, artists } = item;

        return (
          <div className="item" key={id} onClick={() => handleItemClick(item)}>
            <div className="smallCover">
              <Card
                img={`${album.blurPicUrl}?param=100y100`}
                width={55}
                height={55}
                showPlayIcon
                showAnimation={false}
              ></Card>
            </div>
            <div className="info">
              <div className={cn("name", "singleLineEllipsis")}>{name}</div>
              <div className="artists">
                {artists.map((artist: any) => artist.name).join(" / ")}
              </div>
            </div>
          </div>
        );
      })}
    </SimiSongsStyle>
  );
});

export default SimiSongs;
