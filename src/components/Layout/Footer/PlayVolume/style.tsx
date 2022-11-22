import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .progress {
    width: 130px;
    margin-left: 3px;
    border-bottom: 1px solid tipsColor;
    position: relative;
  }

  .bar {
    position: absolute;
    top: -1px;
    left: 0;
  }
`;
