import React, { memo, useState, useEffect } from "react";
import SearchStyle from "./style";

import cn from "classnames";

import { Pagination } from "antd";

import useQuery from "hooks/useQuery";
import useAsyncFn from "hooks/useAsyncFn";
import searchApis from "apis/search";
import MusicList from "components/MusicList";
import SingerList from "@/components/SingerList";
import Album from "@/components/Album";
import { TARGET_TYPE } from "apis/types/business";
import { PAGE_SIZE, PAGE } from "constants/pagination";
// import PlayList from "@/components/PlayList";
import Songlists from "@/components/Songlists";
import UserList from "@/components/UserList";

interface ITab {
  tab: string;
  tabKey: string;
  unit: string;
  key: string;
  searchType: TARGET_TYPE;
}

const TABS: IDictionary<ITab> = {
  MUSIC: {
    tab: "单曲",
    tabKey: "MUSIC",
    unit: "首",
    key: "song",
    searchType: TARGET_TYPE.MUSIC,
  },
  ARTIST: {
    tab: "歌手",
    tabKey: "ARTIST",
    unit: "位",
    key: "artist",
    searchType: TARGET_TYPE.ARTIST,
  },
  ALBUM: {
    tab: "专辑",
    tabKey: "ALBUM",
    unit: "张",
    key: "album",
    searchType: TARGET_TYPE.ALBUM,
  },
  SONG_LIST: {
    tab: "歌单",
    tabKey: "SONG_LIST",
    unit: "个",
    key: "playlist",
    searchType: TARGET_TYPE.SONG_LIST,
  },
  USER: {
    tab: "用户",
    tabKey: "USER",
    unit: "位",
    key: "userprofile",
    searchType: TARGET_TYPE.USER,
  },
};

const Search = memo(() => {
  const { keyword } = useQuery();

  const [page, setPage] = useState(PAGE);
  const [activeTab, setActiveTab] = useState(TABS.MUSIC.tabKey);
  const { unit, key, tab, searchType } = TABS[activeTab];

  const [state, searchFn] = useAsyncFn(searchApis.search);
  const { value: result, loading } = state;

  useEffect(() => {
    searchFn({ keywords: keyword, type: searchType });
  }, [keyword, searchType]);
  const handleTabClick = (key: string) => {
    setActiveTab(key);
    const { searchType } = TABS[key];
    searchFn({ keywords: keyword, type: searchType });
  };

  const handlePageChange = (page: number) => {
    setPage(page);
    searchFn({
      keywords: keyword,
      type: searchType,
      offset: (page - 1) * PAGE_SIZE,
    });
  };

  const total = result?.[`${key}s`].length || 0;

  return (
    <SearchStyle>
      <div className="header">
        <div className="title">
          <span className="keyword">{keyword}</span>
          <span className="count">
            找到 {total} {unit}
            {tab}
          </span>
        </div>
        <div className="tabs">
          {Object.keys(TABS).map((key) => {
            return (
              <div
                key={key}
                className={cn("tab", activeTab === key && "active")}
                onClick={() => handleTabClick(key)}
              >
                {TABS[key].tab}
              </div>
            );
          })}
        </div>
      </div>

      <div className="content">
        {loading ? (
          "加载中"
        ) : (
          <div>
            {activeTab === TABS.MUSIC.tabKey && (
              <MusicList data={result?.songs} />
            )}
            {activeTab === TABS.ARTIST.tabKey && (
              <SingerList data={result?.artists} />
            )}
            {activeTab === TABS.ALBUM.tabKey && <Album data={result?.albums} />}
            {activeTab === TABS.SONG_LIST.tabKey && (
              <Songlists data={result?.playlists} />
            )}
            {activeTab === TABS.USER.tabKey && (
              <UserList data={result?.userprofiles} />
            )}
            <div className="pagination">
              <Pagination
                current={page}
                total={total}
                onChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    </SearchStyle>
  );
});

export default Search;
