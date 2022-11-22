import { ReactElement } from "react";
export interface IColumn<RecordType, Key extends keyof RecordType> {
  title?: string;
  key: Key;
  width?: string;
  render: (
    value: any,
    record: RecordType,
    index?: number
  ) => string | ReactElement;
}
