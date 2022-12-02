import styled from "styled-components";
import { loginBackgroundColor } from "styles/colors";
export default styled.div`
  .item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    cursor: default;
    .smallCover {
      img {
        width: 55px;
        height: 55px;
      }
    }
  }

  .item:hover {
    background-color: ${loginBackgroundColor};
  }

  .name {
    width: 220px;
    margin-bottom: 5px;
    padding-left: 15px;
    font-weight: 600;
  }

  .playCount {
    color: ${loginBackgroundColor};
  }
`;
