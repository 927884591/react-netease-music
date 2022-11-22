import React, { memo } from "react";
import PlayIconStyle from "./style";
import { PlayCircleFilled } from "@ant-design/icons";

interface IProps {
  className?: string;
}
const PlayIcon: React.FC<IProps> = memo(({ className }) => {
  return (
    <PlayIconStyle className={className}>
      <PlayCircleFilled style={{ fontSize: "24px" }} />
    </PlayIconStyle>
  );
});

export default PlayIcon;
