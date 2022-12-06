import React, { memo, useCallback, useRef, useState, useEffect } from "react";

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

import { usePlayAll } from "@/hooks/utils/usePlayAll";

import { Skeleton } from "antd";

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
  data?: any;
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
    data,
  } = props;
  //监听图片是否加载完成,来做骨架屏
  const [loading, setLoading] = useState(false);
  //迫不得已使用window

  window.onload = () => {
    setLoading(true);
  };
  // //当图片加载完取消监听

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleItemClick = useCallback(
    (id: number, autoPlay?: boolean) => {
      if (autoPlay) {
        navigate(`${PLAY_LIST}/${id}`, { state: { autoPlay: true } });
        return;
      }
      navigate(`${PLAY_LIST}/${id}`, {});
    },
    [navigate]
  );
  const playAll = usePlayAll();
  return (
    <AlbumItemStyle
      style={{
        width: width ? width + "px" : "200px",
      }}
      onClick={id ? () => handleItemClick(id) : () => {}}
    >
      <div
        className={cn("img", showAnimation && "showAnimation")}
        style={{ width: width, height: height }}
      >
        <div
          className="shadow"
          style={{
            backgroundImage: `url(${img})`,
            borderRadius:
              width && borderRadius === width / 2
                ? "50px 50px 60px 60px"
                : "50px 50px 1em 1em",
          }}
        ></div>
        {playCount && (
          <div className="playCount">
            <CaretRightFilled style={{ fontSize: "16px" }}></CaretRightFilled>
            {formatNum(playCount)}
          </div>
        )}
        <img
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
              data && playAll(data, true);
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
