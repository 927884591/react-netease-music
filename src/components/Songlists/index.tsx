import React, { memo, useCallback } from "react";
import { ISonglist } from "apis/types/business";
import SongListItem from "./SonglistItem";
import Card from "../Card";
import SonglistsStyle from "./style";

interface IProps {
  data: ISonglist[];
}
const Songlists: React.FC<IProps> = memo(({ data }) => {
  return (
    <SonglistsStyle>
      {data?.map(({ id, name, playCount, picUrl, coverImgUrl }, index) => {
        return (
          // <SongListItem
          //   key={index}
          //   id={id}
          //   name={name}
          //   playCount={playCount}
          //   picUrl={picUrl || coverImgUrl}
          // />
          <Card
            key={index}
            img={picUrl || coverImgUrl}
            name={name}
            playCount={playCount}
            showPlayIcon
            id={id}
          ></Card>
        );
      })}
    </SonglistsStyle>
  );
});

export default Songlists;
