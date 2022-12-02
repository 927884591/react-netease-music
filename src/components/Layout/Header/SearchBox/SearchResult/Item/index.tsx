import React, { memo } from "react";

import { IAlbum, IArtist, IMusic, IMV } from "apis/types/business";
import { noop } from "helpers/fn";

import ItemStyle from "./style";

type Type = IAlbum | IArtist | IMusic | IMV;

interface IItemProps {
  title: string;
  data: Type[];
  renderLabel: (item: any) => string;
  onItemClick?: (item: any) => void;
}

const Item: React.FC<IItemProps> = memo((props: any) => {
  const { title, data, renderLabel, onItemClick = noop } = props;
  return (
    <ItemStyle>
      <div className="title">
        <span>Icon</span>
        {title}
      </div>
      <div className="content">
        {data.map((item: any, index: number) => {
          return (
            <div key={index} className="item" onClick={() => onItemClick(item)}>
              {renderLabel(item)}
            </div>
          );
        })}
      </div>
    </ItemStyle>
  );
});

export default Item;
