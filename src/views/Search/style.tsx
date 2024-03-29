import styled from "styled-components";

export default styled.div`
  height: 100%;
  overflow: hidden;
  .header {
    padding: 20px 30px 10px;
    border-bottom: 1px solid borderColor;

    .title {
      margin-bottom: 20px;

      .keyword {
        font-size: 1.6em;
      }

      .count {
        margin-left: 8px;
        font-size: 0.9em;
        color: tipsHoverColor;
      }
    }

    .tabs {
      display: flex;
      color: nameColor;

      .tab {
        margin-right: 30px;
        cursor: pointer;

        &:hover {
          color: nameHoverColor;
        }
      }

      .active {
        color: black;
        font-weight: bold;
      }
    }
  }

  .content {
    height: calc(100% - 96px);
    .spinner {
      margin-top: 100px;
    }
  }
`;
