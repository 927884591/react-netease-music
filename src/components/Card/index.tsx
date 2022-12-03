import React, { memo, useCallback } from "react";

import AlbumItemStyle from "./style";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { CaretRightFilled } from "@ant-design/icons";

import { formatNum } from "helpers/num";
import { createMusic } from "helpers/business";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setPlayList, play } from "@/reducers/playMusicSlice";

import { IMusic } from "@/apis/types/business";

import { PLAY_LIST } from "constants/routers1";

import cn from "classnames";

interface IPorps {
  img: string | undefined;
  name?: string | undefined;
  author?: string | undefined;
  width?: number;
  height?: number;
  borderRadius?: number;
  showPlayIcon?: boolean;
  playCount?: number;
  id?: number;
  showAnimation?: boolean;
  playlist?: IMusic[];
  onClick?: () => void;
}
const Card: React.FC<IPorps> = memo((props: IPorps) => {
  const {
    img,
    name,
    author,
    width,
    height,
    borderRadius,
    showPlayIcon,
    playCount,
    showAnimation = true,
    id,
    playlist,
    onClick,
  } = props;

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleItemClick = useCallback(
    (id: number) => {
      navigate(`${PLAY_LIST}/${id}`);
    },
    [navigate]
  );

  const playAll = (value: IMusic[], autoPlay?: boolean) => {
    console.log(value);

    dispatch(
      setPlayList({
        playList: value,
      })
    );
    if (autoPlay) {
      const item = value?.[0] as IMusic;
      dispatch(
        play({
          musicId: item.id,
          music: createMusic(item),
        })
      );
    }
  };

  return (
    <AlbumItemStyle
      style={{
        width: width ? width + "px" : "200px",
      }}
      onClick={id ? () => handleItemClick(id) : () => {}}
    >
      <div className={cn("img", showAnimation && "showAnimation")}>
        <div
          className="shadow"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {playCount && (
          <div className="playCount">
            <CaretRightFilled style={{ fontSize: "16px" }}></CaretRightFilled>
            {formatNum(playCount)}
          </div>
        )}
        <img
          decoding="async"
          // 如果有值的话就给个默认值
          width={width ? width + "px" : "200px"}
          height={height ? height + "px" : "200px"}
          src={img}
          alt={name}
          style={{
            objectFit: "cover",
            borderRadius: borderRadius ? borderRadius + "px" : "10px",
          }}
          loading="lazy"
        />
        {showPlayIcon && (
          <div
            className="playButton"
            // 根据传过来的长度等比缩小放大
            style={{
              width: width && width / 3 + "px",
              height: height && height / 3 + "px",
              borderRadius: width && width / 4 + "px",
            }}
            onClick={() => {
              playlist && playAll(playlist, true);
            }}
          >
            <PlayIcon
              className="playIcon"
              // 根据传过来的长度等比缩小放大
              width={width ? width / 8 + "px" : 200 / 8 + "px"}
              height={height ? height / 8 + "px" : 200 / 8 + "px"}
            ></PlayIcon>
          </div>
        )}
      </div>

      {name && <div className="name">{name}</div>}
      {author && <div className="author">{author}</div>}
    </AlbumItemStyle>
  );
});

export default Card;
