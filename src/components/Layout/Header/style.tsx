import styled from "styled-components";
import { HEADERHEIGHT } from "@/constants/style";
export default styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(15px);
  .root {
    display: flex;
    width: 100%;
    height: 8vh;
    line-height: 8vh;
    background-color: rgba(248, 248, 248, 0.8);
    box-shadow: 0 1px 10px 1px rgb(0 0 0 / 12%);
    padding: 0;
    .action {
      flex: 1;
    }
    .nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 1140px;
      + div {
        flex: 1;
      }
      .info {
        display: flex;
        align-items: center;
      }
    }
  }
`;
