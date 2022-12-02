import styled from "styled-components";
import { bodyMinWidth, footerHeight } from "@/styles/constants";
export default styled.div`
  height: 100%;
  .container {
    min-width: ${bodyMinWidth};
    height: 100%;
    .main {
      display: flex;
      flex-direction: column;
      height: calc(100% - ${footerHeight});
    }
  }
`;
