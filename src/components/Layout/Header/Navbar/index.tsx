import { HOME, DISCOVERY, SONG_LIST } from "@/constants/routers1";
import { useLocation, useNavigate } from "react-router-dom";
import React, { memo, useState, useEffect } from "react";
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
  const location = useLocation();
  //绑定Index值
  const [curren, setCurren] = useState<String>("");
  const navigate = useNavigate();
  const changeCurren = (route: any) => {
    setCurren(route);
    navigate(route);
  };
  //当导航变化时触发
  useEffect(() => {
    setCurren(location.pathname);
  }, [navigate]);
  return (
    <NavbarStyle>
      {navbar.map((item: any) => {
        return (
          <span
            key={item.label}
            className={cn(["navItem", curren === item.route ? "active" : ""])}
            onClick={() => {
              changeCurren(item.route);
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
