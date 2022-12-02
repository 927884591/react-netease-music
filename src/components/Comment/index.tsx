import React, { memo } from "react";

import cn from "classnames";
import CommentStyle from "./style";

import { IComment } from "apis/types/comment";
import { formatDatetime } from "helpers/time";

import { LikeFilled } from "@ant-design/icons";

interface IProps {
  data: IComment;
  onLikeChange: (comment: IComment) => void;
}
const Comment: React.FC<IProps> = memo((props: any) => {
  const { data, onLikeChange } = props;
  const { user, content, beReplied, time, likedCount, liked } = data;

  const likeUnlike = async () => {
    await onLikeChange(data);
  };
  return (
    <CommentStyle>
      <div className="avatar">
        <img
          src={`${user.avatarUrl}?param=100y100`}
          width="35px"
          height="35px"
          loading="lazy"
          alt=""
        />
      </div>

      <div className="info">
        <div className="comment">
          <span className="nickname">{user.nickname}: </span>
          <span>{content}</span>
        </div>

        <div className="reply">
          {beReplied.map((userInfo: any, index: any) => {
            return (
              <div className="item" key={index}>
                <span className="nickname">{userInfo.user.nickname}: </span>
                <span>{userInfo.content}</span>
              </div>
            );
          })}
        </div>

        <div className="others">
          <div className="time">{formatDatetime(time, true)}</div>
          <div className="operations">
            <div className={cn("like", liked && "active")} onClick={likeUnlike}>
              <LikeFilled />
              &nbsp;
              {!!likedCount && <span>{likedCount}</span>}
            </div>
          </div>
        </div>
      </div>
    </CommentStyle>
  );
});

export default Comment;
