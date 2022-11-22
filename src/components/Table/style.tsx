import styled from "styled-components";

export default styled.div`
  font-size: 0.9em;
  .header {
    display: flex;
    padding: 10px 0;
    color: tipsHoverColor;
  }

  .content {
    overflow: auto;
    .row {
      display: flex;
      padding: 10px 0;
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
