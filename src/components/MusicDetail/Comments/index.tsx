import React, { memo, useState, useEffect } from "react";
//导入Apis
import songApis from "apis/song";
import commentApis from "apis/comment";
import useAsyncFn from "hooks/useAsyncFn";
import { IComment } from "apis/types/comment";
import Comment from "@/components/Comment";

import { PAGE } from "constants/pagination";
import CommentsStyle from "./style";

import { connect } from "react-redux";

import { Pagination } from "antd";

import cn from "classnames";

const PAGE_SIZE = 30;
const Comments = memo((props: any) => {
  const { musicId, showLyric } = props;
  const [state, getCommentsFn] = useAsyncFn(songApis.getComments);
  const { value: result, loading } = state;
  const [, likeCommentFn] = useAsyncFn(commentApis.likeComment);
  const [, unlikeCommentFn] = useAsyncFn(commentApis.unlikeComment);
  const [page, setPage] = useState(PAGE);
  //请求评论
  useEffect(() => {
    if (musicId && showLyric) {
      getCommentsFn({
        id: musicId,
        offset: 0,
        limit: PAGE_SIZE,
      });
    }
  }, [musicId, showLyric]);

  //更改页面后重新请求评论
  const handlePageChange = (page: number) => {
    setPage(page);
    getCommentsFn({
      id: musicId,
      offset: (page - 1) * PAGE_SIZE,
      limit: PAGE_SIZE,
    });
  };
  //触发点赞事件
  const handleLikeChange = async (comment: IComment, isHot: boolean) => {
    const comments = (isHot ? result?.hotComments : result?.comments) || [];
    const { commentId, liked } = comment;
    const cm = comments.find(
      ({ commentId: cid }) => cid === commentId
    ) as IComment;

    if (liked) {
      await unlikeCommentFn({ id: musicId, commentId }, () => {
        cm.liked = false;
        cm.likedCount -= 1;
      });
      return;
    }

    await likeCommentFn({ id: musicId, commentId }, () => {
      cm.liked = true;
      cm.likedCount += 1;
    });
  };
  return (
    <CommentsStyle>
      {loading ? (
        <div className="block">
          <div className="title">最新评论</div>
          <div className="loading">"加载中"</div>
        </div>
      ) : (
        <>
          {!!result?.hotComments?.length && (
            <div className="block">
              <div className="title">精彩评论</div>
              <div className="comments">
                {result?.hotComments.map((item) => {
                  return (
                    <div className="item" key={item.commentId}>
                      <Comment
                        data={item}
                        onLikeChange={(item) => handleLikeChange(item, true)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className={cn("block", "latestComment")}>
            <div className="title">最新评论（{result?.total || 0}）</div>
            <div className="comments">
              {result?.comments.map((item) => {
                return (
                  <div className="item" key={item.commentId}>
                    <Comment
                      data={item}
                      onLikeChange={(item) => handleLikeChange(item, false)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pagination">
            <Pagination
              current={page}
              defaultPageSize={PAGE_SIZE}
              total={result?.total}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </CommentsStyle>
  );
});

function mapStateToProps(state: any) {
  return {
    musicId: state.playMusic.musicId,
    showLyric: state.playMusic.showLyric,
  };
}
export default connect(mapStateToProps)(Comments);
