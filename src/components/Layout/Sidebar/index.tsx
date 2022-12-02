import React, { memo, useState, useEffect } from "react";
import { Layout } from "antd";
import Siderbar from "./style";
import { SIDERBARWIDTH } from "@/constants/style";
import UserSonglist from "./UserSonglist";
import MusicDetail from "components/MusicDetail";
//导入API
import authApis from "apis/auth";
import songlistApis from "apis/songlist";
import useAsyncFn from "hooks/useAsyncFn";

import { connect } from "react-redux";
import { login } from "@/reducers/loginSlice";

import Menus from "./Menus";
//导入组件antd
import type { MenuProps } from "antd";
import { Popover, Menu } from "antd";
import {
  LogoutOutlined,
  UserOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
//导入登录框组件
import LoginDialog from "../../LoginDialog";
//导入动画组件
import { CSSTransition } from "react-transition-group";

import { loginOut } from "reducers/loginSlice";

type MenuItem = Required<MenuProps>["items"][number];

const { Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [getItem("退出登录", "1", <LogoutOutlined />)];

const SidebarNa: any = (props: any) => {
  //记录登录框是否已经弹出
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const [, logoutFn] = useAsyncFn(authApis.logout);
  const [songlistState, getUserSonglistFn] = useAsyncFn(
    songlistApis.getUserSonglist
  );
  const { loginInfo, changeLoginOut, musicId } = props;
  //从props拿到login信息
  const { isLogined, user } = loginInfo;
  //确定登录状态
  useEffect(() => {
    if (isLogined) {
      getUserSonglistFn(loginInfo.user.userId);
    }
  }, [isLogined]);

  // 点击头像   改变登录显示或关闭事件
  const handleNameClick = () => setShowLoginDialog(true);
  const handleLoginDialogClose = () => setShowLoginDialog(false);

  //点击退出登录触发事件
  const handleLogout = async () => {
    await logoutFn();
    //退出登录操作
    changeLoginOut();
  };
  return (
    <Siderbar>
      <Sider className="root" width={SIDERBARWIDTH} collapsed={false}>
        <div className="user">
          <div className="avatar">
            {isLogined ? (
              <img src={user?.profile?.avatarUrl} loading="lazy" alt="" />
            ) : (
              <UserOutlined />
            )}
          </div>
          {isLogined ? (
            <Popover
              content={
                <Menu
                  defaultSelectedKeys={["1"]}
                  mode="inline"
                  items={items}
                  disabledOverflow={true}
                  onClick={() => {
                    handleLogout();
                  }}
                />
              }
              placement="right"
            >
              <div className="name">
                <span>{user?.profile?.nickname}</span>
                <UserOutlined />
              </div>
            </Popover>
          ) : (
            <div className="name" onClick={handleNameClick}>
              <span>未登录</span>
              <CaretRightOutlined />
            </div>
          )}
        </div>

        <div className="content">
          <Menus />
          {!songlistState.loading && isLogined && (
            <>
              <div className="block">
                <UserSonglist
                  title="创建的歌单"
                  data={songlistState.value?.create}
                />
              </div>

              <div className="block">
                <UserSonglist
                  title="收藏的歌单"
                  data={songlistState.value?.collect}
                />
              </div>
            </>
          )}
        </div>
      </Sider>
      {/* 如果为true展示登录框 */}
      {showLoginDialog && (
        <LoginDialog
          isOpen={showLoginDialog}
          onClose={handleLoginDialogClose}
        ></LoginDialog>
      )}
      {/* 展示歌词页面 */}
      {!!musicId && <MusicDetail />}
      {/* {showLoginDialog && (
        <CSSTransition
          in={showLoginDialog}
          className="blur"
          unmountOnExit={true}
          timeout={2000}
        >
          <LoginDialog></LoginDialog>
        </CSSTransition>
      )} */}
    </Siderbar>
  );
};
const mapStateToProps = (state: any) => ({
  loginInfo: state.login,
  musicId: state.playMusic.musicId,
});
function mapDispatchToProps(dispatch: any) {
  return {
    changeLogin(loginIn: any) {
      dispatch(login(loginIn));
    },
    changeLoginOut(loginOutDis: any) {
      dispatch(loginOut(loginOutDis));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarNa);
