import React, { memo, useState, useCallback } from "react";
import { Layout, Tooltip } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
//导入store
import { connect, useDispatch } from "react-redux";
import {
  hideLyric as hideLyricAction,
  showLyric as showLyricAction,
} from "@/reducers/playMusicSlice";
//导入state类型
import type { IState } from "@/reducers/playMusicSlice";

import { UpOutlined, DownOutlined } from "@ant-design/icons";

import Artists from "@/components/Artists";

import FooterStyle from "./style";
import cn from "classnames";

//导入组件
import ProgressBar from "./ProgressBar";
import AudioTimer from "./AudioTimer";
import PlayOperations from "./PlayOperations";
import PlayMode from "./PlayMode";
import PlayVolume from "./PlayVolume";
import PlayRecord from "./PlayRecord";

const { Footer } = Layout;
const FooterNa = memo((props: any) => {
  //展示展示播放状态
  const [showPlayRecord, setShowPlayRecord] = useState(false);
  //
  const dispatch = useDispatch();
  const { musicId, music, showLyric } = props;

  const togglePlayRecord = useCallback(() => {
    setShowPlayRecord(!showPlayRecord);
  }, [showPlayRecord, setShowPlayRecord]);

  //提交到store
  const handleShowLyric = useCallback(() => {
    dispatch(showLyricAction());
  }, [dispatch]);
  const handleHideLyric = useCallback(() => {
    dispatch(hideLyricAction());
  }, [dispatch]);

  return (
    <FooterStyle>
      <Footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        {musicId ? (
          <div className="progressBar">
            <ProgressBar />
          </div>
        ) : null}

        <div className="songWrap">
          {!!musicId && (
            <React.Fragment>
              <div className={cn("pic", !showLyric ? "showLyric" : "")}>
                <img
                  src={
                    music?.picUrl ? `${music?.picUrl}?param=40y40` : undefined
                  }
                  loading="lazy"
                  alt=""
                />
                {!showLyric && (
                  <div className="mask" onClick={handleShowLyric}>
                    {/* 展示歌词图标 */}
                    <UpOutlined />
                  </div>
                )}
                {showLyric && (
                  <div
                    className={cn("mask", "hideLyric")}
                    onClick={handleHideLyric}
                  >
                    <DownOutlined />
                  </div>
                )}
              </div>
              <div>
                <div className="info">
                  <div className="name">{`${music?.name || "--"} -`}</div>
                  <Artists artists={music?.artists} />
                </div>
                <div className="time">
                  <AudioTimer />
                </div>
              </div>
            </React.Fragment>
          )}
        </div>

        <div className="operations">
          <PlayOperations />
        </div>

        <div className="otherOperations">
          <div className="item">
            <PlayMode />
          </div>
          <div onClick={togglePlayRecord} className="item">
            <Tooltip title="打开播放列表">
              <MenuFoldOutlined className={showPlayRecord ? "active" : ""} />
            </Tooltip>
          </div>
          <div className="item">
            <PlayVolume />
          </div>
        </div>
      </Footer>
      <PlayRecord
        show={showPlayRecord}
        onClickAway={() => setShowPlayRecord(false)}
      />
    </FooterStyle>
  );
});
function mapStateToProps(state: any) {
  return {
    musicId: state.playMusic.musicId,
    music: state.playMusic.music,
    showLyric: state.playMusic.showLyric,
  };
}
export default connect(mapStateToProps)(FooterNa);
