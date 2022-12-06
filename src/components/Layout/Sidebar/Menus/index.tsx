import React, { memo } from "react";
import {
  DISCOVERY,
  VIDEOS,
  COLLECTION,
  CLOUD,
  DOWNLOAD,
} from "constants/routers1";

import cn from "classnames";

import { useNavigate, useLocation } from "react-router-dom";

import {
  CustomerServiceFilled,
  VideoCameraFilled,
  DownloadOutlined,
  CloudFilled,
  HeartFilled,
} from "@ant-design/icons";

import MenusStyle from "./style";

interface IMenuItem {
  icon: any;
  label: string;
  active?: boolean;
  route: string;
}
interface IMenu {
  title?: string;
  items: IMenuItem[];
}

const MENU: IMenu[] = [
  {
    items: [
      {
        icon: <CustomerServiceFilled />,
        label: "发现音乐",
        route: DISCOVERY,
      },
      {
        icon: <VideoCameraFilled />,
        label: "视频",
        route: VIDEOS,
      },
    ],
  },
  {
    title: "我的音乐",
    items: [
      {
        icon: <DownloadOutlined />,
        label: "下载管理",
        route: DOWNLOAD,
      },
      {
        icon: <CloudFilled />,
        label: "我的音乐云盘",
        route: CLOUD,
      },
      {
        icon: <HeartFilled />,
        label: "我的收藏",
        route: COLLECTION,
      },
    ],
  },
];
const Menus = memo(() => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleMenuItemClick = (route: string) => {
    navigate(route);
  };
  return (
    <MenusStyle>
      {MENU.map(({ title, items }, index) => {
        return (
          <div className="block" key={index}>
            {title && <div className="title">{title}</div>}
            <div className="tabs">
              {items.map(({ icon, label, route }) => {
                const isActive = pathname.startsWith(route);
                return (
                  <div
                    key={label}
                    className={isActive ? cn("tab", "active") : "tab"}
                    onClick={() => handleMenuItemClick(route)}
                  >
                    <span>{icon}</span>
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </MenusStyle>
  );
});

export default Menus;
