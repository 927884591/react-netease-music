import styled from "styled-components";
import { SIDERBARWIDTH } from "@/constants/style";
export default styled.div`
  .root {
    width: ${SIDERBARWIDTH};
    height: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    background-color: #eaeaea;
    overflow: hidden;
    z-index: 3;
  }

  .content {
    height: 100%;
  }

  .user {
    display: flex;
    align-items: center;
    padding: 10px;

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      margin-right: 10px;
      border: none;
      border-radius: 50%;
      background-color: #ccc;
      cursor: pointer;
      color: rgb(220, 220, 220);

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .name {
      color: rgb(69, 69, 69);
      cursor: default;
    }
  }

  .block {
    margin-bottom: 20px;
  }
`;
