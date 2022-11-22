import styled from "styled-components";

export default styled.span`
  display: inline-block;

  .navItem {
    margin-right: 32px;
    color: grey;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }

  .active {
    color: black;
  }
`;