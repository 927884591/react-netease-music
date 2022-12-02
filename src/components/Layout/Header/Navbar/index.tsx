import {
  HOME,
  LATEST_MUSIC,
  DISCOVERY,
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
    label: "首页",
    route: HOME,
  },
  {
    label: "发现",
    route: DISCOVERY,
  },
  {
    label: "音乐库",
    route: SONG_LIST,
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
