import styled from "styled-components";

export default styled.div`
  .name {
    display: flex;
    align-items: center;
    padding-left: 20px;

    .icon {
      margin: 0 3px 0 -15px;
    }

    .text {
      display: flex;
      align-items: center;

      span {
        margin-right: 5px;
      }
    }
  }

  .header {
    margin: 0 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid borderColor;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    .count {
      color: tipsColor;
    }

    .actions {
      cursor: pointer;
      color: nameColor;

      &:hover {
        color: nameHoverColor;
      }
    }
  }

  .list {
    height: calc(100% - 27px);
  }
`;
