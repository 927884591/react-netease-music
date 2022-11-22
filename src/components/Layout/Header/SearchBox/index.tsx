import React, { memo } from "react";
import SeachBoxStyle from "./style";
import { SearchOutlined } from "@ant-design/icons";
const SearchBox = memo(() => {
  return (
    <SeachBoxStyle>
      <div className="search">
        <SearchOutlined className="searchBtn" />
        <input type="text" name="" id="" placeholder="搜索" />
      </div>
    </SeachBoxStyle>
  );
});

export default SearchBox;
