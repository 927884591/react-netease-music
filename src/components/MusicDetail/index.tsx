import React, { memo, useEffect } from "react";
import MusicDetailStyle from "./style";
import cn from "classnames";

//导入Apis
import songApis from "apis/song";
import useAsyncFn from "hooks/useAsyncFn";
//导入store
import { connect } from "react-redux";

//导入素材
import playBar from "assets/play-bar.png";
import playCd from "assets/play-cd.png";
//导入组件
import Lyric from "./Lyric";
import Comments from "./Comments";
import Songlists from "./Songlists";
import SimiSongs from "./SimiSongs";
import { CSSTransition } from "react-transition-group";

const MusicDetail = memo((props: any) => {
  //拿到store中的值
  const { showLyric, music, musicId, paused } = props;
  const isPlaying = !paused;
  const [songlistState, getSimiSonglistFn] = useAsyncFn(
    songApis.getSimiSonglist
  );
  const [simiSongState, getSimiSongFn] = useAsyncFn(songApis.getSimiSong);
  //
  useEffect(() => {
    if (musicId && showLyric) {
      getSimiSonglistFn({ id: musicId });
      getSimiSongFn({ id: musicId });
    }
  }, [musicId, showLyric]);
  return (
    <MusicDetailStyle style={{ top: showLyric && "0" }}>
      {showLyric && (
        <>
          <div className="music">
            <div className="cdWrap">
              <div className="cd">
                <div className="bar">
                  <CSSTransition
                    in={!isPlaying}
                    classNames="play"
                    addEndListener={() => ""}
                    appear
                  >
                    <img src={playBar} className={cn("playBar")} alt="" />
                  </CSSTransition>

                  <img src={playCd} className="playCd" alt="" />
                </div>
                <div className="circle">
                  <div className={cn("cover", isPlaying && "rotate")}>
                    <img
                      src={`${
                        music?.picUrl || music?.album?.blurPicUrl
                      }?param=512y512`}
                      alt=""
                      width="190px"
                      height="190px"
                    />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="lyric">
              <div className="name">{music?.name}</div>
              <div className="artists">
                歌手：
                <span>
                  {music?.ar
                    ? music.ar.map((value: any) => value.name).join(" / ")
                    : music.artists.map((value: any) => value.name).join(" / ")}
                </span>
              </div>
              <div className="lrc">
                <Lyric />
              </div>
            </div>
          </div>

          <div className="relatedInfo">
            <div className="comment">
              <Comments />
            </div>
            <div className="relatedDetail">
              {songlistState.loading || simiSongState.loading ? (
                "加载中"
              ) : (
                <>
                  {!!songlistState.value?.length && (
                    <div className="block">
                      <div className="title">包含这首歌的歌单</div>
                      <div>
                        <Songlists data={songlistState.value || []} />
                      </div>
                    </div>
                  )}
                  <div className="block">
                    <div className="title">相似歌曲</div>
                    <div>
                      <SimiSongs data={simiSongState.value || []} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </MusicDetailStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    paused: state.audio.state.paused,
    musicId: state.playMusic.musicId,
    music: state.playMusic.music,
    showLyric: state.playMusic.showLyric,
  };
}

export default connect(mapStateToProps)(MusicDetail);
