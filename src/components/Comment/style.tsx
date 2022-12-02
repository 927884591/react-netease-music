import styled from "styled-components";

export default styled.div`
  display: flex;
  .avatar {
    width: 35px;
    height: 35px;
    margin-right: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  }

  .info {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ededed;

    .comment {
      /* width: calc(); */
      width: ${650 - 55}px !important;
      margin-bottom: 8px;
      font-size: 0.95em;
    }

    .reply {
      margin-bottom: 10px;
      font-size: 0.9em;

      .item {
        width: 100%;
        padding: 8px 10px;
        border-radius: 3px;
        background-color: #f0f0f0;
      }
    }

    .nickname {
      color: #808080;
    }

    .others {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.9em;
      color: black;

      .operations {
        display: flex;

        .like {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }
`;
