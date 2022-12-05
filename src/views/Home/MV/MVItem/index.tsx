import React, { memo } from "react";
import PlayCount from "components/PlayCount";
import MVItemStyle from "./style";
interface IProps {
  name: string;
  artistName: string;
  playCount: number;
  picUrl: string;
  copywriter: string;
}
const MVItem: React.FC<IProps> = memo(
  ({ name, artistName, playCount, picUrl, copywriter }) => {
    return (
      <MVItemStyle>
        <div className="pic">
          <img
            src={`${picUrl}?param=512y512`}
            loading="lazy"
            alt=""
            style={{ objectFit: "cover" }}
          />
          <PlayCount count={playCount} className="playCount" />
          <div className="copywriter">{copywriter}</div>
        </div>
        <div className="name">{name}</div>
        <div className="artistName">{artistName}</div>
      </MVItemStyle>
    );
  }
);

export default MVItem;
