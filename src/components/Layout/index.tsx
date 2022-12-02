import React, { memo, useMemo, useCallback } from "react";

import { connect } from "react-redux";
//导入设置audio的hook

import { MODE, playList as playListLocalStorage } from "helpers/play";
//导入布局
import { Layout } from "antd";
import Footer from "./Footer";
import Sider from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import MusicDetail from "components/MusicDetail";
//导入样式
import LayoutStyle from "./style";
const LayoutNa = memo((props: any) => {
  const { musicId } = props;
  // const playList = useMemo(() => playListLocalStorage.getItem(), [musicId]);
  // const [audio, audioState, audioControls, audioRef] = useAudio({
  //   src: musicUrl,
  //   autoPlay: true,
  //   onEnded: () => playNextMusic(),
  //   onError: () => {
  //     if (playMode === MODE.SINGLE_CYCLE) {
  //       return;
  //     }
  //     playNextMusic();
  //   },
  // });
  return (
    <LayoutStyle>
      <Layout className="container">
        <Header></Header>
        <Layout>
          {/* <Sider></Sider> */}
          <div className="main">
            <Content></Content>
          </div>
        </Layout>
        <Footer></Footer>
      </Layout>
      {!!musicId && <MusicDetail />}
    </LayoutStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    musicId: state.playMusic.musicId,
    musicUrl: state.playMusic.musicUrl,
    playMode: state.playMusic.playMode,
  };
}
export default connect(mapStateToProps)(LayoutNa);
