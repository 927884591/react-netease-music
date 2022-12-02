import React, { memo, ReactElement } from "react";
import TableStyle from "./style";
import { noop } from "helpers/fn";

import cn from "classnames";
export interface IColumn<RecordType, Key extends keyof RecordType> {
  title?: string;
  key: Key;
  width?: string;
  render: (
    value: any,
    record: RecordType,
    index?: number
  ) => string | ReactElement;
  keys?: string;
}

interface IProps<RecordType> {
  showHeader?: boolean;
  columns: IColumn<RecordType, keyof RecordType>[];
  data: RecordType[];
  onDoubleClick?: (item: RecordType) => void;
  isRecordRowDisabled?: (record: RecordType) => boolean;
}

function Table<RecordType extends Record<string, any> = any>({
  showHeader = true,
  columns,
  data,
  onDoubleClick = noop,
  isRecordRowDisabled,
}: IProps<RecordType>) {
  return (
    <TableStyle>
      {showHeader && (
        <div className="header">
          {columns.map(({ title, width }, index) => {
            return (
              <div
                key={index}
                style={{
                  width: width === "214px" ? 0 : width,
                  paddingLeft: width === "214px" ? "214px" : 0,
                }}
              >
                {title}
              </div>
            );
          })}
        </div>
      )}
      {data?.length ? (
        <div className="content">
          {data?.map((item, index) => {
            const disabled = isRecordRowDisabled && isRecordRowDisabled(item);
            return (
              <div
                key={index}
                className={cn("row", disabled && "disabled")}
                onDoubleClick={disabled ? noop : () => onDoubleClick(item)}
              >
                {columns.map(({ key, keys, width, render }, idx) => {
                  return (
                    <div className="info" key={idx} style={{ width }}>
                      {render(item[key] || (keys && item[keys]), item, index)}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty">暂无数据喔</div>
      )}
    </TableStyle>
  );
}

export default Table;
