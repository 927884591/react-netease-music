import React, { memo, useCallback } from "react";

import { connect, useDispatch } from "react-redux";
import { setPlayMode } from "@/reducers/playMusicSlice";

import { MODE } from "helpers/play";

import { Tooltip } from "antd";
import {
  MenuUnfoldOutlined,
  RedoOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

const MODE_ORDER = [
  MODE.PLAY_IN_ORDER,
  MODE.SINGLE_CYCLE,
  MODE.SHUFFLE_PLAYBACK,
];

const MODE_MAP: IDictionary<{
  label: string;
  icon: string;
}> = {
  [MODE.PLAY_IN_ORDER]: {
    label: "顺序播放",
    icon: "sort",
  },
  [MODE.SINGLE_CYCLE]: {
    label: "单曲循环",
    icon: "repeat",
  },
  [MODE.SHUFFLE_PLAYBACK]: {
    label: "随机播放",
    icon: "random",
  },
};
const PlayMode = memo((props: any) => {
  const dispatch = useDispatch();
  const { playMode } = props;

  const handleClick = useCallback(() => {
    const idx = MODE_ORDER.findIndex((m) => m === playMode);
    const nextMode = MODE_ORDER[(idx + 1) % MODE_ORDER.length];
    dispatch(
      setPlayMode({
        playMode: nextMode,
      })
    );
  }, [dispatch, playMode]);

  return (
    <Tooltip title={MODE_MAP[playMode].label}>
      <span onClick={handleClick}>
        {MODE_MAP[playMode].icon === "顺序播放" ? (
          <MenuUnfoldOutlined />
        ) : MODE_MAP[playMode].icon === "单曲循环" ? (
          <RedoOutlined />
        ) : MODE_MAP[playMode].icon === "随机播放" ? (
          <AreaChartOutlined />
        ) : (
          ""
        )}
      </span>
    </Tooltip>
  );
});

function mapStateToProps(state: any) {
  return {
    playMode: state.playMusic.playMode,
  };
}
export default connect(mapStateToProps)(PlayMode);
