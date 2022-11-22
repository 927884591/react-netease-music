import styled from "styled-components";

export default styled.div`
  .prev,
  .next,
  .pause {
    cursor: pointer;
  }

  .prev svg,
  .next svg {
    width: 20px;
    height: 20px;
    color: red;
  }

  .pause {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;

    & svg {
      color: #fff;
    }
  }
`;
