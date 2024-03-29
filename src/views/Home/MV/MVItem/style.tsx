import styled from "styled-components";

export default styled.div`
  width: 24%;
  cursor: pointer;
  .pic {
    position: relative;
    width: 100%;
    padding-top: 55%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .playCount {
      position: absolute;
      top: 5px;
      right: 10px;
    }

    .copywriter {
      width: 100%;
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      color: #fff;
      font-size: 0.9em;
      background-color: rgba(0, 0, 0, 0.5);
      transition: opacity 0.5s ease;
      opacity: 0;
    }

    &:hover {
      .copywriter {
        opacity: 1;
      }
    }
  }

  .name {
    font-weight: 700;
    margin-top: 5px;
    color: nameColor;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      color: nameHoverColor;
    }
  }

  .artistName {
    margin-top: 2px;
    color: tipsColor;
    font-size: 0.9em;
    font-weight: 600;
    &:hover {
      color: tipsHoverColor;
    }
  }
`;
