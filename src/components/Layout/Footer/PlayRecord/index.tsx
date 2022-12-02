import React, { memo, useState, useRef } from "react";

import cn from "classnames";

import useClickAway from "hooks/useClickAway";

import PlayRecordStyle from "./style";
import PlayHistory from "./PlayHistory";
import PlayList from "./PlayList";

interface ITab {
  tab: string;
  tabKey: string;
}

interface IProps {
  show: boolean;
  onClickAway: () => void;
}
const TABS: IDictionary<ITab> = {
  PLAY_LIST: {
    tab: "播放列表",
    tabKey: "PLAY_LIST",
  },
  PLAY_HISTORY: {
    tab: "历史记录",
    tabKey: "PLAY_HISTORY",
  },
};
const PlayRecord: React.FC<IProps> = memo((props) => {
  const { show, onClickAway } = props;
  const playRecordRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState(TABS.PLAY_LIST.tabKey);
  useClickAway(playRecordRef, () => onClickAway());
  return (
    <PlayRecordStyle className={cn(show && "show")} ref={playRecordRef}>
      {show && (
        <>
          <div className="tabs">
            {Object.keys(TABS).map((key) => {
              return (
                <div
                  key={key}
                  className={cn("tab", activeTab === key && "active")}
                  onClick={() => setActiveTab(TABS[key].tabKey)}
                >
                  {TABS[key].tab}
                </div>
              );
            })}
          </div>

          <div className="content">
            {activeTab === TABS.PLAY_LIST.tabKey ? (
              <PlayList />
            ) : (
              <PlayHistory />
            )}
          </div>
        </>
      )}
    </PlayRecordStyle>
  );
});

export default PlayRecord;
