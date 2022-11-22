import styled from "styled-components";

export default styled.div`
  .tabs {
    color: rgb(77, 77, 77);
    cursor: default;

    .tab {
      padding: 10px 20px;

      span {
        margin-right: 10px;
      }
    }

    .tab:hover {
      background-color: #e3e3e3;
    }

    .active {
      color: red;
    }
  }

  .block {
    margin-bottom: 25px;

    .title {
      padding-left: 20px;
      font-size: 0.8em;
      color: grey;
    }
  }
`;
