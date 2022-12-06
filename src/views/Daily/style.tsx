import styled from "styled-components";

export default styled.div`
  .top {
    display: flex;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      margin-left: 56px;
      .title {
        font-size: 30px;
        font-weight: 700;
      }
      .detail {
        font-size: 25px;
        margin: 25px 0;
        font-weight: 500;
        .createTime {
          font-size: 23px;
          color: #7a7a7a;
        }
      }
      .description {
        height: 60px;
        width: 400px;
        overflow: hidden;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .action {
        display: flex;
        margin-top: 25px;
        > div {
          margin-right: 10px;
        }
        .btn {
          color: white;
          background: #335eea;
          text-align: center;
          width: 50px;
          height: 40px;
          line-height: 40px;
          border-radius: 10px;
          font-weight: 600;
          &:hover {
            background: #1b4beb;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
