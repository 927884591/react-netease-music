import React, { memo } from "react";
import LinkTitleStyle from "./style";
import { RightOutlined } from "@ant-design/icons";
interface IProps {
  title: string;
  route?: string;
  checkAll?: boolean;
}
const LinkTitle: React.FC<IProps> = memo(({ title, route, checkAll }) => {
  return (
    <LinkTitleStyle>
      <div className="base">
        {title}
        <RightOutlined />
      </div>
      {checkAll && <div className="checkAll">查看全部</div>}
    </LinkTitleStyle>
  );
});

export default LinkTitle;
