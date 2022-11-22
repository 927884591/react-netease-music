import React, { memo } from "react";
import cn from "classnames";
import BannerItemStyle from "./style";
import { noop } from "helpers/fn";

interface IProps {
  typeTitle: string;
  imageUrl: string;
  className?: string;
  onClick?: () => void;
}

const BannerItem: React.FC<IProps> = memo(
  ({ typeTitle, imageUrl, className, onClick = noop }) => {
    return (
      <BannerItemStyle className={className} onClick={onClick}>
        <img src={imageUrl} loading="lazy" alt="" />
        <div className="type">{typeTitle}</div>
      </BannerItemStyle>
    );
  }
);

export default BannerItem;
