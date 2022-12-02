import React, { memo } from "react";

import useAsyncFn from "@/hooks/useAsyncFn";

import LibraryStyle from "./style";

const Songlist = memo(() => {
  return (
    <LibraryStyle>
      <div className="top">
        <div className="title"></div>
        <div className="likeMuisc">
          <div className="btn"></div>
          <div className="list"></div>
        </div>
      </div>
      <div className="info">{/* map */}</div>
    </LibraryStyle>
  );
});

export default Songlist;
