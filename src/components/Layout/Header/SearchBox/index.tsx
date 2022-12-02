import React, { memo, useEffect, useState, useMemo, useRef } from "react";
import SeachBoxStyle from "./style";

import { SearchOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import useAsyncFn from "hooks/useAsyncFn";
import useClickAway from "hooks/useClickAway";
import useQuery from "hooks/useQuery";
import searchApis from "apis/search";
import SearchResult from "./SearchResult";
import Words from "./Words";

import { setSearchHistory, searchHistoryLocalStorage } from "helpers/search";
import { debounce } from "helpers/fn";

import ROUTES from "constants/routes";

import cn from "classnames";

const SearchBox = memo(() => {
  const navigate = useNavigate();
  const query = useQuery();
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [keyword, setKeyword] = useState(query.keyword || "");

  const [state, searchHotFn] = useAsyncFn(searchApis.searchHot);
  const [searchState, searchSuggestFn] = useAsyncFn(searchApis.searchSuggest);
  const { value: searchResult } = searchState;

  useEffect(() => {
    searchHotFn();
  }, []);

  useClickAway(searchRef, () => setShowResult(false));

  const handleInputFocus = () => setShowResult(true);

  const handleInputChange = async (value: string) => {
    if (value) {
      await searchSuggestFn({ keywords: value });
    }
  };

  const go2SearchPage = (word: string) => {
    navigate(`${ROUTES.SEARCH}?keyword=${word}`);
    setSearchHistory(word);
    setShowResult(false);
    inputRef.current?.blur();
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
        <input
          type="text"
          placeholder="搜索"
          ref={inputRef}
          value={keyword}
          onFocus={handleInputFocus}
          onChange={({ target: { value } }) => {
            setKeyword(value);
            debounceInputChange(value);
          }}
          onKeyPress={handleInputKeyPress}
        />
      </div>
      <div className={cn("result", showResult && "show")}>
        {searchResult && keyword ? (
          <SearchResult data={searchResult} />
        ) : (
          <div>
            <Words
              title="热门搜索"
              words={state.value?.map(({ first }) => first)}
              onWordClick={handleWordClick}
            />
            <Words
              title="搜索历史"
              words={searchHistoryLocalStorage.getItem()}
              onWordClick={handleWordClick}
            />
          </div>
        )}
      </div>
    </SeachBoxStyle>
  );
});

export default SearchBox;
