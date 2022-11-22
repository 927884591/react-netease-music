import React, { memo } from "react";
import cn from "classnames";
import { useNavigate, useMatch } from "react-router-dom";

import { ISonglist } from "apis/types/business";

import UserSonlistStyle from "./style";

import { SONG_LIST_DETAIL, SONG_LISTS } from "constants/routers1";

import { connect } from "react-redux";
interface IProps {
  title: string;
  data?: ISonglist[];
  login?: any;
}
//从props拿到ltitle data和store种拿到login的登录信息
const UserSonglist: React.FC<IProps> = memo(({ title, data, login }) => {
  const navigate = useNavigate();
  //匹配路由的路径,这个注意*******
  const routeMatch = useMatch(SONG_LIST_DETAIL);

  //需要拿到登录的名字

  //点击歌单切换路由
  const handleClick = (id: number) => navigate(`${SONG_LISTS}/${id}`);
  return (
    <UserSonlistStyle>
      <div className="title">{title}</div>
      <div className="content">
        {data?.map(({ id, name, trackCount }) => {
          const isActive =
            routeMatch && Number(routeMatch.params.songlistId) === id;
          const text = `${name.replace(
            login.user.profile.nickname,
            "我"
          )}（${trackCount}首）`;
          return (
            <div
              key={id}
              title={text}
              className={cn("item", isActive && "active")}
              onClick={() => handleClick(id)}
            >
              {text}
            </div>
          );
        })}
      </div>
    </UserSonlistStyle>
  );
});
function mapStateToProps(state: any) {
  return { login: state.login };
}
// function mapDispatchToProps(dispach: any) {
//   return {
//     changeLogin()
//   }
// }
export default connect(mapStateToProps)(UserSonglist);
