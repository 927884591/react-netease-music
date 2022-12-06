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
    .searchBox {
      --timing: 0.3s;
      --width-of-input: 100%;
      --height-of-input: 40px;
      --border-height: 2px;
      --input-bg: #ebebeb;
      --border-color: #2f2ee9;
      --border-radius: 30px;
      --after-border-radius: 1px;
      position: relative;
      width: var(--width-of-input);
      height: var(--height-of-input);
      display: flex;
      align-items: center;
      padding-inline: 0.8em;
      border-radius: var(--border-radius);
      transition: border-radius 0.5s ease;
      background: var(--input-bg, #fff);
      .searchIcon {
        border: none;
        background: none;
        color: #000;
        width: 17px;
        margin-top: 3px;
      }
      input {
        font-size: 0.9rem;
        background-color: transparent;
        width: 100%;
        height: 100%;
        padding-inline: 0.5em;
        padding-block: 0.7em;
        border: none;
        :focus {
          outline: none;
        }
      }
      &:before {
        content: "";
        position: absolute;
        background: var(--border-color);
        transform: scaleX(0);
        transform-origin: center;
        width: 100%;
        height: var(--border-height);
        left: 0;
        bottom: 0;
        border-radius: 1px;
        transition: transform var(--timing) ease;
      }
      &:focus-within {
        border-radius: var(--after-border-radius);
        &:before {
          transform: scale(1);
        }
      }
    }
    .ant-modal-content {
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(40px);
      border-radius: 15px;
    }
  }
`;
