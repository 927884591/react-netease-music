import React, { memo } from "react";
import PlayCountStyle from "./style";
import { CaretRightFilled } from "@ant-design/icons";
//格式化播放数量工具
import { formatNum } from "helpers/num";
interface IProps {
  count: number;
  className?: string;
}
const PlayCount: React.FC<IProps> = memo(({ count, className }) => {
  return (
    <PlayCountStyle className={className}>
      <CaretRightFilled />
      {formatNum(count)}
    </PlayCountStyle>
  );
});

export default PlayCount;
