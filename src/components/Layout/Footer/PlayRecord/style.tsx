import styled from "styled-components";
import { HEADERHEIGHT, FOOTHEIGHT } from "@/constants/style";
export default styled.div`
  top: ${HEADERHEIGHT};
  width: 380px;
  height: calc(100% - ${HEADERHEIGHT} - ${FOOTHEIGHT});
  position: fixed;
  top: headerHeight;
  right: 0;
  border-left: 1px solid borderColor;
  box-shadow: 0 0 5px #fff;
  background-color: #fff;
  transform: translate(100%, 0);
  transition: transform 0.3s ease;

  &.show {
    transform: translate(0, 0);
  }
  .tabs {
    width: 55%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    border: 1px solid tipsColor;
    border-radius: 20px;

    .tab {
      padding: 5px 0;
      width: 50%;
      border-radius: 20px;
      font-size: 0.95em;
      text-align: center;
      background-color: #fff;
      cursor: pointer;

      &:hover {
        background-color: borderColor;
      }
    }

    .active,
    .active:hover {
      color: #fff;
      background-color: tipsColor;
    }
  }

  .content {
    height: calc(100% - 69px);
    font-size: 0.9em;
    overflow: scroll;
  }
`;
