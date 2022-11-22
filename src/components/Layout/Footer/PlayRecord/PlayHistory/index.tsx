import React, { memo } from "react";
import List from "../List";
import { IMyMusic } from "apis/types/business";
import { playHistory as playHistoryLocalStorage } from "helpers/play";
import useUpdate from "hooks/useUpdate";
//导入store
import { useDispatch } from "react-redux";
import {
  play as playAction,
  clearPlayHistory as clearPlayHistoryAction,
} from "@/reducers/playMusicSlice";

const PlayHistory = memo(() => {
  //更新列表
  const forceUpdate = useUpdate();

  const dispatch = useDispatch();
  //获取loaclStorage的播放列表
  const playHistory = playHistoryLocalStorage.getItem();

  //提交到store
  const handleDoubleClick = (item: IMyMusic) => {
    dispatch(
      playAction({
        musicId: item.id,
        music: item,
        keepOrder: true, // 若直接从历史记录中播放，历史记录列表顺序不需要变更
      })
    );
  };
  const clearPlayHistory = () => {
    dispatch(clearPlayHistoryAction());
    forceUpdate();
  };
  return (
    <List
      data={playHistory}
      onDoubleClick={handleDoubleClick}
      onClear={clearPlayHistory}
    />
  );
});

export default PlayHistory;
