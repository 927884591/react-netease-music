import styled from "styled-components";
import { HEADERHEIGHT } from "@/constants/style";
export default styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(15px);
  .root {
    display: flex;
    width: 100%;
    height: 8vh;
    line-height: 8vh;
    background-color: rgba(248, 248, 248, 0.8);
    box-shadow: 0 1px 10px 1px rgb(0 0 0 / 12%);
    padding: 0;
    .action {
      flex: 1;
    }
    .nav {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 1140px;
      + div {
        flex: 1;
      }
      .info {
        display: flex;
        align-items: center;
      }
      .route {
        position: absolute;
        left: 0%;
        .back {
          display: inline-block;
          margin-right: 15px;

          > svg {
            width: 40px;
            height: 20px;
            cursor: pointer;
            transition: all 0.4s ease-in;
            background-color: #fff;
            border-radius: 5px;
            &:hover {
              box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
              transform: translateY(-2px);
              transition: all 0.4s;
            }
          }
        }
        .forward {
          display: inline-block;

          > svg {
            width: 40px;
            height: 20px;
            line-height: 20px;
            cursor: pointer;
            transition: all 0.4s ease-in;
            background-color: #fff;
            border-radius: 5px;
            &:hover {
              box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
              transform: translateY(-2px);
              transition: all 0.4s;
            }
          }
        }
      }
    }
  }
`;
