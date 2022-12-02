import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    flex-direction: column;
    .title {
      display: flex;
      .nickname {
        font-weight: 700;
        font-size: 25px;
        margin-left: 15px;
      }
    }
    .likeMuisc {
      display: flex;
      margin-top: 15px;
      .btn {
        height: 100px;
        width: 250px;
        border-radius: 20px;
        background: rgba(176, 210, 255, 0.5);
        backdrop-filter: blur(15px);
        margin-right: 15px;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        .item {
          display: flex;
          .likeMusicInfo {
            display: flex;
            flex-direction: column;
            margin: 0 15px;
            .name {
              width: 60px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              .detail {
              }
            }
          }
        }
      }
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    .nav {
      margin: 15px 0;
      font-size: 18px;
      font-weight: 700;
    }
    .songlist {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      > .item {
        margin: 10px 0;
        text-align: center;

        .name {
          margin: 10px 0;
          width: 200px;
          white-space: nowrap;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .author {
          color: #ccc;
          font-weight: 700;
        }
      }
    }
  }
`;
