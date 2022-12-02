import React, { memo } from "react";
import "assets/icons";
interface IProps {
  name: string;
  color?: string;
}
const Icon = memo((props: IProps) => {
  const { name, color } = props;
  const symbolId = `#icon-${name}`;
  return (
    <svg aria-hidden="true">
      <use href={symbolId} fill={color || "currentColor"} />
    </svg>
  );
});

export default Icon;
