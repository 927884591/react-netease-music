import React, { memo } from "react";

import Item from "./Item";

import albumApis from "apis/album";
import { IAlbum, IArtist, IMusic, IMV } from "apis/types/business";
import { ISearchSuggestResponse } from "apis/types/search";

import { createMusic } from "helpers/business";

import { useDispatch } from "react-redux";
import { play } from "@/reducers/playMusicSlice";

import SearchResultStyle from "./style";

interface IProps {
  data: ISearchSuggestResponse;
}

const SearchResult: React.FC<IProps> = memo((props: any) => {
  const { data } = props;
  const { order } = data;
  const dispatch = useDispatch();
  const config: {
    [key: string]: any;
  } = {
    songs: {
      title: "单曲",
      icon: "music",
      renderLabel: (item: IMusic) =>
        `${item.name} - ${item.artists.map(({ name }) => name).join(" / ")}`,
      onItemClick: async (item: IMusic) => {
        let { picUrl } = item;

        if (!picUrl) {
          const result = await albumApis.getAlbum(item.album.id);
          picUrl = result?.album.blurPicUrl;
        }

        dispatch(
          play({
            musicId: item.id,
            music: createMusic({
              ...item,
              picUrl,
              duration: item.duration / 1000,
            }),
          })
        );
      },
    },
    albums: {
      title: "专辑",
      icon: "headset",
      renderLabel: (item: IAlbum) => `${item.name} - ${item?.artist?.name}`,
    },
    artists: {
      title: "歌手",
      icon: "person",
      renderLabel: (item: IArtist) => `${item.name}`,
    },
    mvs: {
      title: "视频",
      icon: "mobile-video",
      renderLabel: (item: IMV) => `${item.name} - ${item.artistName}`,
    },
  };
  return (
    <SearchResultStyle>
      {order?.map((type: any) => {
        const configOfType = config[type];
        const itemData = data[type];

        if (!configOfType) {
          return null;
        }

        return <Item key={type} {...configOfType} data={itemData} />;
      })}
      {!order && <div className="empty">没有结果喔</div>}
    </SearchResultStyle>
  );
});

export default SearchResult;
