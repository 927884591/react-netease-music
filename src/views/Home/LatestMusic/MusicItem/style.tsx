import styled from "styled-components";
import {
  borderColor,
  nameColor,
  tipsColor,
  songListHoverColor,
} from "@/styles/colors";

export default styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid ${borderColor};
  &:hover {
    background-color: ${songListHoverColor};
  }

  &.active {
    background-color: ${songListHoverColor};
  }
  .borderBottom {
    border-bottom: 1px solid ${borderColor};
  }

  .pic {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    position: relative;
    margin: 0 10px;
    cursor: pointer;

    img {
      border-radius: 5px;
    }

    .playIcon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .isPlaying {
    margin-right: 10px;
    color: red;
  }

  .order {
    margin-right: 10px;
    font-size: 0.9em;
    color: ${tipsColor};
  }

  .info {
    .name {
      color: black;
      font-weight: 700;
    }
    > div {
      font-weight: 600;
    }
  }
`;
