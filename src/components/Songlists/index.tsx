import React, { memo } from "react";
import { ISonglist } from "apis/types/business";
import SongListItem from "./SonglistItem";
import SonglistsStyle from "./style";
interface IProps {
  data?: ISonglist[];
}
const Songlists: React.FC<IProps> = memo(({ data }) => {
  return (
    <SonglistsStyle>
      {data?.map(({ id, name, playCount, picUrl, coverImgUrl }, index) => {
        return (
          <SongListItem
            key={index}
            id={id}
            name={name}
            playCount={playCount}
            picUrl={picUrl || coverImgUrl}
          />
        );
      })}
    </SonglistsStyle>
  );
});

export default Songlists;
