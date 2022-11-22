import styled, { keyframes } from "styled-components";
import { loginBackgroundColor } from "@/styles/colors";
import { HEADERHEIGHT } from "@/constants/style";
const blur = keyframes`
  from {
    backdrop-filter:blur(0px);
  }

  to {
    backdrop-filter:blur(5px);
  }
`;

export default styled.div`
  display: flex;
  position: absolute;
  /* background-color: rgba(253, 253, 253, 0.5); */
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 10;
  text-align: center;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    backdrop-filter: blur(5px) opacity(1);
    z-index: 11;
    animation: ${blur} 0.5s;
  }

  .root {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    width: 300px;
    height: 300px;
    margin: auto;
    background-color: ${loginBackgroundColor};
    z-index: 12;
    .close {
      width: 14px;
      height: 14px;
      border-radius: 7px;
      position: absolute;
      left: 7px;
      top: 5px;
      z-index: 15;
      background-color: #ff5652;
      cursor: pointer;
      .closebtn {
        svg {
          width: 8px;
        }
      }
      span {
        vertical-align: top;
        display: none;
        &:hover {
          display: inline-block;
        }
      }
    }
    .title {
      font-size: 700;
      font-size: 24px;
      margin-bottom: 5px;
    }
    .login-form-button {
      width: 100%;
    }
  }
`;
