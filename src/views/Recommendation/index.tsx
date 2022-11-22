import React, { memo } from "react";

import Banner from "./Banner";
import Songlist from "./Songlist";
import LatestMusic from "./LatestMusic";
import RecommendationStyle from "./style";
import MV from "./MV";
const Recommendation = memo(() => {
  return (
    <RecommendationStyle>
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
    </RecommendationStyle>
  );
});

export default Recommendation;
