import React, { memo } from "react";
import SonglistItemStyle from "./style";
import PlayCount from "components/PlayCount";
import PlayIcon from "components/PlayIcon";
interface IProps {
  id: number;
  name: string;
  playCount: number;
  picUrl?: string;
}
const SonglistItem: React.FC<IProps> = memo(
  ({ id, name, playCount, picUrl }) => {
    return (
      <SonglistItemStyle>
        <div className="cover">
          {picUrl && <img src={picUrl} loading="lazy" alt="" />}
          <PlayCount count={playCount} className="playCount" />
          <PlayIcon className="playIcon" />
        </div>
        <div className="name">{name}</div>
      </SonglistItemStyle>
    );
  }
);

export default SonglistItem;
