import styled from "styled-components";

export default styled.div`
  .alias {
    margin-top: 10px;
    color: #fff;
  }

  .operations {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    color: black;

    .index {
      width: 40px;
      margin-right: 6px;
      text-align: right;
      margin-right: 16px;
    }

    .isPlaying {
      width: 44px;
      margin-right: 16px;
      text-align: right;
      color: red;
    }

    span:nth-child(2) {
      cursor: pointer;

      &:hover {
        color: black;
      }
    }
  }

  .name {
    display: flex;
    align-items: center;

    span {
      margin-right: 5px;
    }
  }

  .active {
    color: red;
  }
`;
