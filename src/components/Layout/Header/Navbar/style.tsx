import styled from "styled-components";

export default styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  .navItem {
    font-size: 1.1rem;
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
