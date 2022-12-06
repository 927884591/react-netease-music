import styled from "styled-components";

import { HEADERHEIGHT, FOOTHEIGHT } from "@/constants/style";
export default styled.span`
  /* .searchBox在Layout/style.tsx下  因为对话框在这个css作用域下无法全局展示 */
  display: flex;
  align-items: center;
  .search {
    display: flex;
    align-items: center;
    width: 160px;
    height: 30px;
    border-radius: 20px;
    font-size: 0.95em;
    background-color: #ebebeb;
    box-sizing: border-box;
    .searchBtn {
      margin: 0 5px;
    }

    input {
      width: 115px;
      margin-left: 3px;
      height: 15px;
      outline: none;
      border: none;
      background-color: transparent;
    }
  }
  .result {
    width: 350px;
    height: calc(100vh - 8vh - ${FOOTHEIGHT});
    padding: 18px 0;
    position: fixed;
    right: 0;
    top: 8vh;
    transform: translate(100%, 0);
    box-shadow: 0 6px 12px 0 rgb(0 0 0 / 12%);
    background-color: #fff;
    transition: transform 0.3s ease;
  }

  .show {
    transform: translate(0, 0);
  }

  /* 对话框中的样式 */
  /* .searchBox在Layout/style.tsx下  因为对话框在这个css作用域下无法全局展示 */
`;
