import React, { memo, useEffect } from "react";
import LatestMusicStyle from "./style";
import { LATEST_MUSIC } from "@/constants/routers1";

import LinkTitle from "components/LinkTitle";
import MusicItem from "./MusicItem";

import useAsyncFn from "hooks/useAsyncFn";
import personalizedApis from "apis/personalized";

const LatestMusic = memo(() => {
  const [state, getPersonalizedNewMusicFn] = useAsyncFn(
    personalizedApis.getPersonalizedNewMusic
  );
  const { value: music = [], loading } = state;

  useEffect(() => {
    getPersonalizedNewMusicFn();
  }, []);

  return (
    <LatestMusicStyle>
      <LinkTitle title="最新音乐" route={LATEST_MUSIC} checkAll />
      <div className="content">
        <div className="block">
          {music
            .slice(0, 5)
            .map(({ id, name, picUrl, song, ...others }, index) => (
              <MusicItem
                key={name}
                index={index}
                id={id}
                name={name}
                picUrl={picUrl}
                song={song}
                {...others}
              />
            ))}
        </div>
        <div className="block">
          {music
            .slice(5, 10)
            .map(({ id, name, picUrl, song, ...others }, index) => (
              <MusicItem
                key={name}
                index={index + 5}
                id={id}
                name={name}
                picUrl={picUrl}
                song={song}
                {...others}
              />
            ))}
        </div>
      </div>
    </LatestMusicStyle>
  );
});

export default LatestMusic;
