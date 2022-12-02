import React, { memo, useEffect } from "react";

import LinkTitle from "components/LinkTitle";
import MVItem from "./MVItem";
//导入API
import useAsyncFn from "hooks/useAsyncFn";
import personalizedApis from "apis/personalized";

import MVStyle from "./style";

import { MV } from "constants/routers1";
const MVNa = memo(() => {
  const [state, getPersonalizedMVFn] = useAsyncFn(
    personalizedApis.getPersonalizedMV
  );
  const { value: mvs = [], loading: isGettingMV } = state;
  useEffect(() => {
    getPersonalizedMVFn();
  }, []);
  return (
    <MVStyle>
      <LinkTitle title="推荐MV" route={MV} checkAll />
      {isGettingMV ? (
        "哈哈哈"
      ) : (
        <div className="content">
          {mvs.map(({ name, artistName, playCount, picUrl, copywriter }) => {
            return (
              <MVItem
                key={name}
                name={name}
                artistName={artistName}
                playCount={playCount}
                picUrl={picUrl}
                copywriter={copywriter}
              />
            );
          })}
        </div>
      )}
    </MVStyle>
  );
});

export default MVNa;
