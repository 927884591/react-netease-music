import React, { memo, useState, useEffect } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import HeaderStyle from "./style";
import Action from "./Action";
import SearchBox from "./SearchBox";
import LoginDialog from "@/components/LoginDialog";

import useAsyncFn from "hooks/useAsyncFn";
import authApis from "apis/auth";
import songlistApis from "apis/songlist";

import { connect, useDispatch } from "react-redux";
import { loginOut } from "@/reducers/loginSlice";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { ILoginResult } from "apis/types/auth";
interface ILogin {
  isLogined: boolean;
  user: ILoginResult;
}

const { Header } = Layout;
const HeaderNa = memo((props: ILogin) => {
  //管理登录的状态
  const dispatch = useDispatch();
  //记录登录框是否已经弹出
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const [, logoutFn] = useAsyncFn(authApis.logout);
  const [songlistState, getUserSonglistFn] = useAsyncFn(
    songlistApis.getUserSonglist
  );
  //从props拿到login信息
  const { isLogined, user } = props;

  //确定登录状态
  useEffect(() => {
    if (isLogined) {
      getUserSonglistFn(user.userId);
    }
  }, [isLogined]);

  // 点击头像   改变登录显示或关闭事件
  const handleNameClick = () => setShowLoginDialog(true);
  const handleLoginDialogClose = () => setShowLoginDialog(false);

  //点击退出登录触发事件
  const handleLogout = async () => {
    await logoutFn();
    //退出登录操作
    dispatch(loginOut());
  };

  return (
    <HeaderStyle>
      <Header className="root">
        <Action></Action>
        <div className="nav">
          <Navbar></Navbar>
          <div className="info">
            <SearchBox></SearchBox>
            <Avatar onClick={handleNameClick} src={user?.profile?.avatarUrl} />
          </div>
        </div>
        <div></div>
      </Header>
      {showLoginDialog && (
        <LoginDialog
          isOpen={showLoginDialog}
          onClose={handleLoginDialogClose}
        ></LoginDialog>
      )}
    </HeaderStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    isLogined: state.login.isLogined,
    user: state.login.user,
  };
}

export default connect(mapStateToProps)(HeaderNa);
