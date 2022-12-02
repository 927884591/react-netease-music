import React, { memo, useEffect } from "react";
import SonglistStyle from "./style";

import LinkTitle from "components/LinkTitle";
import Songlists from "components/Songlists";

import { SONG_LIST } from "@/constants/routers1";

import useAsyncFn from "hooks/useAsyncFn";
import personalizedApis from "apis/personalized";
const Songlist = memo(() => {
  const [state, personalizedSonglistFn] = useAsyncFn(
    personalizedApis.getPersonalizedSonglist
  );
  const { value: songlist = [], loading: isGettingSonglist } = state || {};
  useEffect(() => {
    personalizedSonglistFn({ limit: 10 });
  }, []);
  return (
    <SonglistStyle>
      <LinkTitle title="推荐歌单" route={SONG_LIST} checkAll />
      {isGettingSonglist ? "哈哈哈" : <Songlists data={songlist} />}
    </SonglistStyle>
  );
});

export default Songlist;
