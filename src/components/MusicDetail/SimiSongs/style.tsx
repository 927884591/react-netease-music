import styled from "styled-components";
import { loginBackgroundColor } from "@/styles/colors";
export default styled.div`
  .item {
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    cursor: default;
    .smallCover {
      position: relative;
    }
    .info {
      padding-left: 15px;
      font-weight: 600;
      .name {
        color: black;
      }
      .artists {
        color: #ccc;
      }
    }
  }

  .item:hover {
    background-color: ${loginBackgroundColor};
  }

  .name {
    width: 220px;
    margin-bottom: 5px;
  }

  .artists {
    font-size: 0.9em;
    color: black;
  }
`;
