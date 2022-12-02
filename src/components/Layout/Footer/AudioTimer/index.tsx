import React, { memo, useMemo } from "react";
import { formatTime } from "helpers/time";
import { connect } from "react-redux";
const AudioTimer = memo((props: any) => {
  //获取state
  const { state } = props;
  //取出time
  const time = useMemo(() => {
    return `${formatTime(state?.time * 1000)} / ${formatTime(
      state?.duration * 1000
    )}`;
  }, [state?.time, state?.duration]);
  return <div>{time}</div>;
});

function mapStateToProps(state: any) {
  return {
    state: state.audio.state,
  };
}
export default connect(mapStateToProps)(AudioTimer);
