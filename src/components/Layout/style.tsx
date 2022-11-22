import styled from "styled-components";
import { bodyMinWidth } from "@/styles/constants";
export default styled.div`
  height: 100%;
  .container {
    min-width: ${bodyMinWidth};
    height: 100%;
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
    }
  }
`;
