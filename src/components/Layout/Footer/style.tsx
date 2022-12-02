import styled from "styled-components";

import { bodyMinWidth, footerHeight } from "styles/constants";

export default styled.div`
  width: 100%;
  min-width: ${bodyMinWidth};
  height: 9vh;
  position: fixed;
  bottom: 0;
  box-shadow: 0 3px 12px 0 rgb(0 0 0 / 12%);
  display: flex;
  justify-content: space-between;
  z-index: 10;
  backdrop-filter: blur(44px);
  .ant-layout-footer {
    background: rgba(255, 255, 255, 0.5);
  }
  .progressBar {
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
  }

  .songWrap {
    display: flex;
    align-items: center;

    .pic {
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
    }

    .mask {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      text-align: center;
      line-height: 40px;
      display: none;
    }

    .showLyric:hover .mask {
      display: block;
    }

    .hideLyric {
      display: block;
    }

    & img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
      background-color: #ccc;
    }

    .info {
      display: flex;
      align-items: center;

      .name {
        margin-right: 5px;
        font-weight: 700;
      }
    }

    & .time {
      font-size: 0.85em;
      color: rgb(179, 179, 179);
    }
  }

  .operations {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    > div {
      display: flex;
      align-items: center;
    }
  }

  .otherOperations {
    display: flex;
    align-items: center;
    margin-right: 15px;

    .item {
      margin-left: 15px;
      color: #888;
      cursor: pointer;
      height: 20px;
      &:last-child {
        display: flex;
        align-items: center;
      }

      & span:focus {
        outline: none;
      }
    }
  }
`;
