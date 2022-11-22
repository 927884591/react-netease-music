import {
  RECOMMENDATION,
  LATEST_MUSIC,
  RECOMMEND_DAILY,
  SONG_LIST,
  LEADER_BOARD,
  SINGERS,
} from "@/constants/routers1";
import { useNavigate } from "react-router-dom";
import React, { memo, useState } from "react";
import cn from "classnames";
import NavbarStyle from "./style";
const navbar: any = [
  {
    label: "个性推荐",
    route: RECOMMENDATION,
  },
  {
    label: "每日歌曲推荐",
    route: RECOMMEND_DAILY,
  },
  {
    label: "歌单",
    route: SONG_LIST,
  },
  {
    label: "排行榜",
    route: LEADER_BOARD,
  },
  {
    label: "歌手",
    route: SINGERS,
  },
  {
    label: "最新音乐",
    route: LATEST_MUSIC,
  },
];

const Navbar = memo(() => {
  //绑定Index值
  const [currenIndex, setCurrenIndex] = useState<Number>(0);
  const navigate = useNavigate();
  const changeCurrenIndex = (index: Number, route: any) => {
    setCurrenIndex(index);
    navigate(route);
  };
  return (
    <NavbarStyle>
      {navbar.map((item: any, index: Number) => {
        return (
          <span
            key={item.label}
            className={cn(["navItem", currenIndex === index ? "active" : ""])}
            onClick={() => {
              changeCurrenIndex(index, item.route);
            }}
          >
            {item.label}
          </span>
        );
      })}
    </NavbarStyle>
  );
});

export default Navbar;
