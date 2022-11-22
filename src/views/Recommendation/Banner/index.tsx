import React, { memo, useMemo, useEffect, useState } from "react";
import BannerItem from "./BannerItem";
import BannerStyle from "./style";
import cn from "classnames";

//导入API工具
import useAsyncFn from "hooks/useAsyncFn";
import useInterval from "hooks/useInterval";
import personalizedApis from "apis/personalized";
import { TARGET_TYPE } from "apis/types/business";

const Banner = memo(() => {
  const [state, getBannerFn] = useAsyncFn(personalizedApis.getBanner);
  //记录当前banner
  const [currentMid, setCurrentMid] = useState(0);
  const { value: banners = [], loading: isGettingBanner } = state;

  //获取banner
  useEffect(() => {
    getBannerFn();
  }, []);
  //确定好当前的banner设置对应的样式
  const bannersClassName = useMemo(() => {
    const len = banners.length;
    const left = (currentMid - 1 + len) % len;
    const right = (currentMid + 1) % len;
    return {
      [currentMid]: "middle",
      [left]: "left",
      [right]: "right",
    };
  }, [currentMid, banners]);

  //鼠标触摸改变banner的index
  const handleMidChange = (index: number) => {
    setCurrentMid(index);
  };

  //banner循环
  useInterval(() => {
    if (!banners.length) {
      return;
    }
    setCurrentMid((currentMid + 1) % banners.length);
  }, 6000);
  return (
    <BannerStyle>
      <div className="banners">
        {banners.map(({ imageUrl, typeTitle, targetId, targetType }, index) => {
          const className = bannersClassName[index] || "hidden";
          const isMusicType = targetType === TARGET_TYPE.MUSIC;
          return (
            <BannerItem
              key={imageUrl}
              typeTitle={typeTitle}
              imageUrl={imageUrl}
              className={cn(className, isMusicType && "enabled")}
              // onClick={
              //   isMusicType ? () => handleItemClick(targetId) : undefined
              // }
            />
          );
        })}
      </div>
      <div className="dots">
        {banners.map(({ imageUrl }, index) => {
          return (
            <div
              key={imageUrl}
              className={cn("dot", index === currentMid ? "active" : "")}
              onMouseOver={() => handleMidChange(index)}
            />
          );
        })}
      </div>
    </BannerStyle>
  );
});

export default Banner;
