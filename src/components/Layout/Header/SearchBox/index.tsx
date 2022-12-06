import React, { memo, useEffect, useState, useMemo, useRef } from "react";
import SeachBoxStyle from "./style";

import { SearchOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import useAsyncFn from "hooks/useAsyncFn";
import useQuery from "hooks/useQuery";
import searchApis from "apis/search";
import SearchResult from "./SearchResult";
import Words from "./Words";

import { setSearchHistory, searchHistoryLocalStorage } from "helpers/search";
import { debounce } from "helpers/fn";

import ROUTES from "constants/routes";

import { Modal } from "antd";

import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

import cn from "classnames";

const SearchBox = memo(() => {
  const navigate = useNavigate();
  const query = useQuery();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [keyword, setKeyword] = useState(query.keyword || "");

  const [state, searchHotFn] = useAsyncFn(searchApis.searchHot);
  const [searchState, searchSuggestFn] = useAsyncFn(searchApis.searchSuggest);
  const { value: searchResult } = searchState;

  useEffect(() => {
    searchHotFn();
  }, []);

  const handleInputFocus = () => {
    setShowResult(true);
    inputRef.current?.focus();
  };

  const handleInputChange = async (value: string) => {
    if (value) {
      await searchSuggestFn({ keywords: value });
    }
  };

  const go2SearchPage = (word: string) => {
    navigate(`${ROUTES.SEARCH}?keyword=${word}`);
    setSearchHistory(word);
    setShowResult(false);
  };

  const handleInputKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      if (!keyword.trim()) {
        return;
      }
      go2SearchPage(keyword);
    }
  };

  const handleWordClick = (word: string) => {
    go2SearchPage(word);
    setKeyword(word);
  };

  // 注意：这里需要使用useMemo，保证每次获取的都是同一个debounceInputChange函数。
  const debounceInputChange = useMemo(
    () => debounce(handleInputChange, 500),
    []
  );
  return (
    <SeachBoxStyle>
      <div className="search">
        <SearchOutlined className="searchBtn" />
        <input type="text" placeholder={keyword} onClick={handleInputFocus} />
      </div>

      <Modal
        open={showResult}
        onCancel={() => setShowResult(false)}
        footer={null}
        getContainer={".container"}
        closable={false}
        maskClosable
        destroyOnClose
      >
        <div className="searchBox">
          <SearchIcon className="searchIcon" width={"17px"}></SearchIcon>
          <input
            ref={inputRef}
            type="text"
            onKeyPress={handleInputKeyPress}
            onChange={({ target: { value } }) => {
              setKeyword(value);
              debounceInputChange(value);
            }}
            autoFocus
          ></input>
        </div>
        <div className={cn("result", showResult && "show")}>
          {searchResult && keyword ? (
            <SearchResult data={searchResult} />
          ) : (
            <>
              <Words
                title="搜索历史"
                words={searchHistoryLocalStorage.getItem()}
                remove={searchHistoryLocalStorage.removeItem}
                onWordClick={handleWordClick}
              />
              <Words
                title="热门搜索"
                words={state.value?.map(({ first }) => first)}
                onWordClick={handleWordClick}
              />
            </>
          )}
        </div>
      </Modal>
    </SeachBoxStyle>
  );
});

export default SearchBox;
