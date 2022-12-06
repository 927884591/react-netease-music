import { useDispatch } from "react-redux";

import { IMusic } from "@/apis/types/business";

import { setPlayList, play } from "@/reducers/playMusicSlice";
import { createMusic } from "helpers/business";

import { useStore } from "react-redux";

export const usePlayAll = () => {
  const store: any = useStore();

  const dispatch = useDispatch();
  return (value: IMusic[], autoPlay?: boolean) => {
    if (!value) {
      return;
    }
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
      store.getState()?.audio.controls.play();
    }
  };
};
