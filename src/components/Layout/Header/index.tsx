import React, { memo } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import HeaderStyle from "./style";
import Action from "./Action";
import SearchBox from "./SearchBox";
const { Header } = Layout;
const HeaderNa = memo(() => {
  return (
    <HeaderStyle>
      <Header className="root">
        <Action></Action>
        <div className="nav">
          <Navbar></Navbar>
          <div></div>
          <SearchBox></SearchBox>
        </div>
      </Header>
    </HeaderStyle>
  );
});

export default HeaderNa;
