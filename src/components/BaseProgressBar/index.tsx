import React, { memo, useCallback, useMemo, useState } from "react";

import { isNumber } from "helpers/is";
import BaseProgressBarStyle from "./style";
import { Slider } from "antd";

import _ from "lodash";
interface IProps {
  className?: string;
  donePercent?: number;
  originDonePercent?: number;
  renderLabel?: () => string;
  onBarClick: (donePercent: number) => void;
}
const BaseProgressBar: React.FC<IProps> = memo(
  ({ donePercent = 0, originDonePercent, renderLabel, onBarClick }) => {
    const [inputValue, setInputValue] = useState(1);
    const width = useMemo(() => {
      const width = isNumber(originDonePercent)
        ? originDonePercent
        : donePercent * 100;
      return width;
    }, [donePercent, originDonePercent]);

    //当发生值改变时需要提交给store
    const onChange = (newValue: number) => {
      setInputValue(newValue);
      onBarClick(newValue);
      handleBarClick();
    };
    //做防抖操作
    const throttleOnChange = _.throttle(onChange, 1000);

    const handleBarClick = useCallback(() => {
      const percent = inputValue / 100;
      onBarClick(percent);
    }, [onBarClick]);
    return (
      <BaseProgressBarStyle>
        <Slider
          onChange={throttleOnChange}
          value={width}
          tooltip={{
            formatter: () => {
              return `${renderLabel ? renderLabel() : ""}`;
            },
          }}
        />
      </BaseProgressBarStyle>
    );
  }
);

export default BaseProgressBar;
