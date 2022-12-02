import styled from "styled-components";

export default styled.div`
  .block {
    margin-bottom: 50px;
  }

  .latestComment {
    margin-bottom: 0;
  }

  .title {
    margin-bottom: 20px;
    font-weight: bold;
  }
  .comments {
    .item {
      overflow: hidden;

      text-overflow: ellipsis;
    }
  }

  .loading {
    text-align: center;
  }

  .pagination {
    padding: 30px 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
