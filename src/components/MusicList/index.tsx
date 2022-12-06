import React, { memo, useEffect } from "react";

import Table, { IColumn } from "components/Table";
import Card from "../Card";

import { ReactComponent as VIPIcon } from "assets/icons/VIP.svg";
import { ReactComponent as DownloadIcon } from "assets/icons/download.svg";
import { ReactComponent as VolumeIcon } from "assets/icons/volume.svg";

import cn from "classnames";
//导入api
import {
  IMusic,
  IArtist,
  IAlbum,
  MUSIC_STATUS,
  MUSIC_TYPE,
} from "apis/types/business";
import albumApis from "apis/album";
//导入工具
import { formatTime } from "helpers/time";
import { createMusic } from "helpers/business";

import { connect, useDispatch } from "react-redux";
import { play } from "@/reducers/playMusicSlice";

import { useLocation } from "react-router-dom";

import MusicListStyle from "./style";

interface IProps {
  data: any;
  onPlayAll?: (value: any, autoPlay?: boolean) => void;
}
const MusicList: React.FC<IProps> = memo((props: any) => {
  const { musicId, paused, data, onPlayAll } = props;
  const location = useLocation();
  const { state } = location;

  const dispatch = useDispatch();

  useEffect(() => {
    onPlayAll && onPlayAll(data, state?.autoPlay);
  }, [data]);

  const columns: IColumn<IMusic, keyof IMusic>[] = [
    {
      title: "",
      key: "name",
      width: "214px",
      render: (name: string, record: IMusic, index?: number) => {
        return (
          <div className="operations">
            {musicId === record.id ? (
              <span className="isPlaying">
                <VolumeIcon
                  style={{ width: "16px", height: "16px" }}
                ></VolumeIcon>
              </span>
            ) : (
              <span className="index">{(index || 0) + 1}</span>
            )}
            <DownloadIcon className="downloadIcon"></DownloadIcon>
            <Card
              img={record.al?.picUrl || `${record.picUrl}?param=400y400`}
              width={100}
              height={100}
              showAnimation={false}
              showPlayIcon
            ></Card>
          </div>
        );
      },
    },
    {
      title: "音乐标题",
      key: "name",
      width: "45%",
      render: (name: string, { alias, id, fee }: IMusic) => {
        return (
          <>
            <div className={cn("name", musicId === id && "active")}>
              <span>{name}</span>
              {fee === MUSIC_TYPE.VIP && "vip"}
            </div>
            <VIPIcon className="vipIcon"></VIPIcon>
            {alias?.length ? (
              <div className="alias">{alias.join(" ")}</div>
            ) : null}
          </>
        );
      },
    },
    {
      title: "歌手",
      key: "ar",
      keys: "artists",
      width: "15%",
      render: (artists: IArtist[]) =>
        artists?.map(({ name }) => name).join(" / "),
    },
    {
      title: "专辑",
      key: "al",
      keys: "album",
      width: "20%",
      render: (album: IAlbum) => album?.name,
    },
    {
      title: "时长",
      key: "dt",
      keys: "duration",
      width: "10%",
      render: (duration: number) => formatTime(duration),
    },
  ];
  //
  const handleDoubleClick = async (item: IMusic) => {
    let { picUrl } = item;

    if (!picUrl) {
      const result = await albumApis.getAlbum(item?.al?.id);
      picUrl = result?.album?.blurPicUrl;
    }

    dispatch(
      play({
        musicId: item.id,
        music: createMusic({
          ...item,
          picUrl,
          duration: item.dt || item.duration,
        }),
      })
    );
    // console.log(999999, onPlayAll);

    // onPlayAll && onPlayAll(data, true);
  };
  const checkIsRecordRowDisabled = (record: IMusic) =>
    record.status === MUSIC_STATUS.NOT_FOUND;

  return (
    <MusicListStyle>
      <Table<IMusic>
        columns={columns}
        data={data}
        onDoubleClick={handleDoubleClick}
        isRecordRowDisabled={checkIsRecordRowDisabled}
      />
    </MusicListStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    musicId: state.playMusic.musicId,
    paused: state.audio.state.paused,
  };
}

export default connect(mapStateToProps)(MusicList);
