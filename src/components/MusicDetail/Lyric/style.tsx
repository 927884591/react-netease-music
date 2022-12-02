import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  white-space: nowrap;
  color: black;
  font-size: 1em;

  /* For hide scrollbar */
  padding-right: 17px;
  box-sizing: content-box;
  box-shadow: 0 1px 5px #fff;
  .line {
    height: 45px;
    line-height: 45px;
    border-radius: 10px;
    padding-left: 15px;
    font-weight: 600;
    color: #3d3d3d;
    &:hover {
      background-color: #dcdcdc;
    }
  }

  .active {
    font-size: 1.2em;
    color: black;
    font-weight: 700;
  }

  .loading {
    text-align: left;
  }
`;
