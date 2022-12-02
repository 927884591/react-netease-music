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
      .action {
        display: flex;
        margin-top: 25px;
        > div {
          margin-right: 10px;
        }
      }
    }
  }
`;
