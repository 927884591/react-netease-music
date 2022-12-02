import { useEffect, useState } from "react";

import useAsyncFn from "@/hooks/useAsyncFn";
import playListApis from "apis/playList";
import songApis from "apis/song";
import { useParams } from "react-router-dom";

const usePlaylist = () => {
  // const params = useParams();
  // const { id } = params;
  const [playList, playListFn] = useAsyncFn(playListApis.getPlayList);
  const [ids, setIds] = useState([]);
  console.log(ids, playList, 111111111);

  const [playListToDOM, setPlayListToDOM]: any = useState([]);
  const [songList, songListFn]: any = useAsyncFn(songApis.getSongDetail);
  //请求歌单信息
  // useEffect(() => {
  //   playListFn(Number(id));
  // }, []);
  useEffect(() => {
    let ids = [];
    ids = playList.value?.playlist?.trackIds.map((item: any) => item.id);
    setIds(ids);

    setPlayListToDOM(playList?.value?.playlist);
  }, [playList]);

  //请求歌单歌曲信息
  useEffect(() => {
    songListFn(ids);
  }, [ids]);
  return [songList, playListFn];
};
export default usePlaylist;
