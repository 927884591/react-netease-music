import styled from "styled-components";

export default styled.div`
  font-size: 0.9em;
  .header {
    display: flex;
    padding: 10px 0;
    color: black;
    font-weight: 600;
    font-size: 16px;
  }

  .content {
    overflow: auto;
    .row {
      display: flex;
      padding: 10px 0;
      font-size: 16px;
      color: #ccc;
      font-weight: 500;
      .info {
        display: flex;
        align-items: center;
        .operations {
          .downloadIcon {
            width: 16px;
            height: 16px;
            margin: 0 16px;
          }
        }
      }
      .name {
        font-size: 16px;
        font-weight: 600;
        color: black;
      }
      .vipIcon {
        width: 20px;
        height: 20px;
        fill: red;
      }
    }

    .row:nth-child(2n + 1) {
      background-color: #fafafa;
    }

    .row:hover {
      background-color: bgColor;
    }

    .disabled {
      color: tipsColor;
    }
  }

  .empty {
    margin-top: 100px;
    text-align: center;
  }
`;
