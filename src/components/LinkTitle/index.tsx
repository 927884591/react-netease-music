import React, { memo } from "react";
import LinkTitleStyle from "./style";
import { RightOutlined } from "@ant-design/icons";
interface IProps {
  title: string;
  route: string;
}
const LinkTitle: React.FC<IProps> = memo(({ title, route }) => {
  return (
    <LinkTitleStyle>
      {title}
      <RightOutlined />
    </LinkTitleStyle>
  );
});

export default LinkTitle;
