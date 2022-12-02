import { useDispatch } from "react-redux";

import { IMusic } from "@/apis/types/business";

import { setPlayList, play } from "@/reducers/playMusicSlice";
import { createMusic } from "helpers/business";

export const usePlayAll = () => {
  const dispatch = useDispatch();
  return (value: IMusic[], autoPlay?: boolean) => {
    if (!value) {
      return;
    }
    console.log(value);
    dispatch(
      setPlayList({
        playList: value,
      })
    );
    if (autoPlay) {
      const item = value?.[0] as IMusic;
      dispatch(
        play({
          musicId: item.id,
          music: createMusic(item),
        })
      );
    }
  };
};
