import styled from "styled-components";

export default styled.div`
  .prev,
  .next,
  .pause {
    cursor: pointer;
  }
  .prev,
  .next {
    height: 20px;
    width: 20px;
  }

  .prev svg,
  .next svg {
    width: 20px;
    height: 20px;
  }

  .pause {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
  }
`;
