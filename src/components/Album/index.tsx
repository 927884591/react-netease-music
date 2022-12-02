import React, { memo } from "react";

import { IAlbum } from "apis/types/business";

import AlbumStyle from "./style";
const Card = React.lazy(() => import("../Card"));
interface IProps {
  data: IAlbum[];
}

const Album: React.FC<IProps> = memo((props: IProps) => {
  const { data } = props;
  return (
    <AlbumStyle>
      {data.map((al: IAlbum) => {
        return (
          <Card
            key={al.id}
            img={al.blurPicUrl}
            name={al.name}
            author={al.artist?.name}
          ></Card>
        );
      })}
    </AlbumStyle>
  );
});

export default Album;
