import styled from "styled-components";
import { borderColor } from "@/styles/colors";
export default styled.div`
  padding: 0 20px;
  .title {
    color: black;
  }

  .words {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .word {
    display: flex;
    font-size: 0.9em;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    justify-content: space-around;
    .index {
      width: 100px;
    }
    > .main {
      flex: 1;
      overflow-y: auto !important;
      height: 30px !important;
    }
    &:hover {
      background-color: ${borderColor};
    }
    &:nth-child(-n + 3) {
      font-weight: 700;
      .index {
        color: red;
      }
    }
  }
`;
