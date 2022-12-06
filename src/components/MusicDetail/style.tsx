import styled, { keyframes } from "styled-components";
import { HEADERHEIGHT, FOOTHEIGHT } from "@/constants/style";
const route = keyframes`
0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
export default styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  position: fixed;
  top: 100%;
  left: 0;
  transition: all 0.5s ease;
  overflow-y: scroll;
  z-index: 11;
  .music,
  .relatedInfo {
    width: 1000px;
    margin: 0 auto;
  }

  .music {
    display: flex;
    margin-bottom: 50px;

    .cdWrap {
      padding: 0 100px 0 150px;
    }

    .cd {
      position: relative;
    }

    .bar {
      width: 110px;
      height: 160px;
      position: relative;
      left: 50%;
      transform: translate(-15px, 0);

      .playBar {
        width: 100px;
        height: auto;
        margin: 10px 0 0 8px;
      }

      .pause {
        transform: rotate(-35deg);
        transform-origin: 0 0;
      }

      .playCd {
        width: 25px;
        height: auto;
        position: absolute;
        top: -5px;
        left: 0;
      }
    }

    .circle {
      width: 300px;
      height: 300px;
      margin-top: -75px;
      border-radius: 50%;
      background-color: #1c1d20;
      border: 10px solid #e4e0e0;
      display: flex;
      align-items: center;
      justify-content: center;

      .cover {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid black;
        background-color: rgba(0, 0, 0, 0.5);
        animation: ${route} 20s linear infinite;
        animation-play-state: paused;

        img {
          border-radius: 50%;
        }
      }

      .rotate {
        animation-play-state: running;
      }
    }

    .lyric {
      flex: 1;
      overflow: hidden;

      .name {
        padding: 30px 0 10px;
        font-size: 2em;
        font-weight: 700;
      }

      .artists {
        margin-bottom: 15px;
        font-size: 1em;
        font-weight: 600;
        span {
          color: #ccc;
          font-weight: 600;
          font-size: 1em;
        }
      }

      .lrc {
        height: 350px;
      }
    }
  }

  .relatedInfo {
    display: flex;
    justify-content: space-between;

    .comment {
      width: 650px;
    }

    .relatedDetail {
      margin-left: 50px;
      flex: 1;
      overflow: hidden;
      .block {
        margin-bottom: 35px;

        .title {
          padding-bottom: 15px;
          font-size: 1.1em;
          font-weight: bold;
        }
      }
    }
  }
  .play-enter,
  .play-appear {
    transform-origin: 0 0;
  }

  .play-enter-active,
  .play-appear-active {
    transform: rotate(-35deg);
    transform-origin: 0 0;
    transition: all 300ms;
  }

  .play-exit,
  .play-exit-active {
    transform-origin: 0 0;
    transition: all 300ms;
  }
`;
