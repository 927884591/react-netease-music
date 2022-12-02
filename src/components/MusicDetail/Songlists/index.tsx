import React, { memo } from "react";

import cn from "classnames";

import { useNavigate } from "react-router-dom";
import { PLAY_LIST } from "constants/routers1";

import PlayCount from "components/PlayCount";
import { ISonglist } from "apis/types/business";

import { useDispatch } from "react-redux";
import { hideLyric } from "@/reducers/playMusicSlice";
import SonglistsStyle from "./style";
import Card from "components/Card";

interface IProps {
  data: ISonglist[];
}

const Songlists: React.FC<IProps> = memo((props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = props;
  const handleItemClick = (id: number) => {
    dispatch(hideLyric());
    navigate(`${PLAY_LIST}/${id}`);
  };

  return (
    <SonglistsStyle>
      {data.map((item: any) => {
        return (
          <div
            key={item.id}
            className="item"
            onClick={() => handleItemClick(item.id)}
          >
            <div className="smallCover" style={{ position: "relative" }}>
              <Card
                img={`${item.coverImgUrl}?param=100y100`}
                width={55}
                height={55}
                showAnimation={false}
                showPlayIcon
              ></Card>
            </div>
            <div className="info">
              <div className={cn("name", "singleLineEllipsis")}>
                {item.name}
              </div>
              <PlayCount count={item.playCount} className="playCount" />
            </div>
          </div>
        );
      })}
    </SonglistsStyle>
  );
});

export default Songlists;
