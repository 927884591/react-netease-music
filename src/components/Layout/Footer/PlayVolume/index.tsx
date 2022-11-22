import React, { memo, useCallback, useMemo } from "react";
import PlayVolumeStyle from "./style";

import { SoundOutlined } from "@ant-design/icons";
import BaseProgressBar from "@/components/BaseProgressBar";
import { connect } from "react-redux";
const PlayVolume = memo((props: any) => {
  const { state, controls } = props;

  const handleBarClick = useCallback(
    (percent: number) => {
      controls?.volume(percent);
    },
    [controls]
  );
  const originDonePercent = useMemo(() => {
    const volume = Number((state?.volume || 0).toFixed(2));
    return Math.floor(volume * 100);
  }, [state?.volume]);

  return (
    <PlayVolumeStyle>
      <SoundOutlined />
      <div className="progress">
        <BaseProgressBar
          className="bar"
          originDonePercent={originDonePercent}
          onBarClick={handleBarClick}
        />
      </div>
    </PlayVolumeStyle>
  );
});
function mapStateToProps(state: any) {
  return {
    state: state.audio.state,
    controls: state.audio.controls,
  };
}
export default connect(mapStateToProps)(PlayVolume);
