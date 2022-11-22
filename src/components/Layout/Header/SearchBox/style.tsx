import styled from "styled-components";

export default styled.span`
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
`;
