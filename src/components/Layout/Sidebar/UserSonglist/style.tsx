import styled from "styled-components";

export default styled.div`
  .title {
    padding: 0 20px;
    margin-bottom: 5px;
    font-size: 0.8em;
    color: grey;
  }

  .content {
    .item {
      padding: 8px 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: default;
      font-size: 0.9em;

      &:hover {
        background-color: #e3e3e3;
      }
    }
  }
`;
