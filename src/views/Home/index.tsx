import React, { memo } from "react";

import Banner from "./Banner";
import Songlist from "./Songlist";
import LatestMusic from "./LatestMusic";
import HomeStyle from "./style";
import MV from "./MV";
const Home = memo(() => {
  return (
    <HomeStyle>
      <Banner></Banner>
      <div className="block">
        <Songlist></Songlist>
      </div>
      <div className="block">
        <LatestMusic></LatestMusic>
      </div>
      <div className="block">
        <MV></MV>
      </div>
    </HomeStyle>
  );
});

export default Home;
