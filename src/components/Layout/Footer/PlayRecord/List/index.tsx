import React, { memo } from "react";

import cn from "classnames";
import ListStyle from "./style";
//导入表格组件
import Table, { IColumn } from "components/Table";
import {
  ClearOutlined,
  PlayCircleFilled,
  PauseCircleFilled,
} from "@ant-design/icons";
//导入组件类型
import type { ColumnsType } from "antd/es/table";

import Card from "@/components/Card";

import {
  IMyMusic,
  IArtist,
  MUSIC_STATUS,
  MUSIC_TYPE,
} from "apis/types/business";
import { formatTime } from "helpers/time";

import { connect } from "react-redux";

interface IProps {
  data: IMyMusic[];
  onDoubleClick: (item: IMyMusic) => void;
  onClear: () => void;
}
const List: React.FC<IProps> = memo((props: any) => {
  const { data, onDoubleClick, onClear, musicId, state } = props;

  const columns: IColumn<IMyMusic, keyof IMyMusic>[] = [
    {
      key: "name",
      width: "55%",
      render: (name: string, { id, fee, picUrl }: IMyMusic) => {
        const isActive = state.musicId === id;
        return (
          <div className={cn("name", isActive && "active")}>
            {isActive &&
              (state?.paused ? <PlayCircleFilled /> : <PauseCircleFilled />)}
            <Card
              img={`${picUrl}?param=60y60`}
              width={45}
              height={45}
              showAnimation={false}
              showPlayIcon
            ></Card>
            <div className="text">
              <span>{name}</span>
              {fee === MUSIC_TYPE.VIP && "哈哈"}
            </div>
          </div>
        );
      },
    },
    {
      key: "artists",
      width: "30%",
      render: (artists: IArtist[], { id }: IMyMusic) => {
        return (
          <div className={musicId === id ? "active" : ""}>
            {artists?.map(({ name }) => name).join(" / ")}
          </div>
        );
      },
    },
    {
      key: "duration",
      width: "15%",
      render: (duration: number) => {
        return formatTime(duration);
      },
    },
  ];
  return (
    <ListStyle>
      <div className="header">
        <div className="count">总{data.length}首</div>
        {data.length > 0 && (
          <div className="actions">
            <div onClick={onClear}>
              <ClearOutlined />
              {" 清空"}
            </div>
          </div>
        )}
      </div>
      <div className="list">
        <Table<IMyMusic>
          columns={columns}
          data={data}
          showHeader={false}
          onDoubleClick={onDoubleClick}
          isRecordRowDisabled={(item) => item.status === MUSIC_STATUS.NOT_FOUND}
        />
      </div>
    </ListStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    musicId: state.playMusic.musicId,
    state: state.audio.state,
  };
}
export default connect(mapStateToProps)(List);
