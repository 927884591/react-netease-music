import styled from "styled-components";

export default styled.div`
  width: 100%;
  &:hover {
    .controllDot {
      display: block;
    }
  }
  /* 更改slider的默认样式 */
  .ant-slider {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    .ant-slider-track {
      background: rgba(0, 0, 0);
    }
    /* .ant-slider-step {
      background: rgba(255, 255, 255, 0.8);
    } */
    &:hover .ant-slider-handle {
      background-color: #e7e7e7;
      display: block;
      margin-top: 0;
      border: 0;
    }
  }
  .ant-slider-handle {
    display: none;
  }

  .doneWrap {
    position: relative;

    .done {
      width: 100%;
      height: 2px;
      background-color: red;
    }

    .controllDot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: red;
      z-index: 10;
      display: none;
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(50%, -50%);

      &:hover {
        display: block;
      }

      .label {
        padding: 0 5px;
        position: absolute;
        top: 13px;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 3px;
        color: #fff;
        font-size: 0.9em;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
