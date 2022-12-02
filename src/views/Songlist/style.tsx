import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    flex-direction: column;
    .likeMusic {
      display: flex;
      .btn {
        width: 300px;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
      }
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
  }
`;
