import styled from "styled-components";

export default styled.div`
  margin-bottom: 30px;
  font-size: 0.95em;

  .title {
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-bottom: 10px;
    color: black;

    span {
      transform: scale(0.9);
      margin-right: 5px;
    }
  }

  .item {
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: borderColor;
    }
  }
`;
