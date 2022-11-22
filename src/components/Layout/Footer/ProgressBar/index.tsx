import React, { memo, useMemo, useCallback } from "react";
import { connect } from "react-redux";
import BaseProgressBar from "@/components/BaseProgressBar";
//格式化时间工具
import { formatTime } from "helpers/time";

const ProgressBar = memo((props: any) => {
  const { state, controls } = props;

  const donePercent = useMemo(() => {
    return state?.duration ? state?.time / state.duration : 0;
  }, [state?.time, state?.duration]);

  const renderLabel = useCallback(() => {
    return formatTime(state?.time);
  }, [state?.time]);

  const handleBarClick = useCallback(
    (percent: any) => {
      controls?.seek((state?.duration || 0) * percent);
    },
    [controls, state?.duration]
  );
  return (
    <BaseProgressBar
      donePercent={donePercent}
      renderLabel={renderLabel}
      onBarClick={handleBarClick}
    />
  );
});

function mapStateToProps(state: any) {
  return {
    state: state.audio.state,
    controls: state.audio.controls,
  };
}
export default connect(mapStateToProps)(ProgressBar);
