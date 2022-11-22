import styled from "styled-components";
import { HEADERHEIGHT } from "@/constants/style";
export default styled.div`
  .root {
    display: flex;
    width: 100%;
    min-width: 800px;
    height: ${HEADERHEIGHT};
    line-height: ${HEADERHEIGHT};
    background-color: rgba(248, 248, 248, 0.95);
    box-shadow: 0 1px 10px 1px rgb(0 0 0 / 12%);
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0;
    .nav {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
