import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  .img {
    position: relative;
    transition: all 0.8s;
    .playCount {
      position: absolute;
      top: 2px;
      right: 10px;
      color: #fff;
      font-weight: 600;
    }

    img {
      cursor: pointer;
    }
    .playButton {
      display: none;
      width: 50px;
      height: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.14);
      border-radius: 25px;
      backdrop-filter: blur(16px);
      cursor: pointer;
      .playIcon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: #fff;
      }
      &:hover {
        background: rgba(255, 255, 255, 0.28);
      }
    }
    &:hover .playButton {
      display: inline-block;
    }
  }
  .showAnimation {
    .shadow {
      position: absolute;
      top: 12px;
      height: 100%;
      width: 100%;
      filter: blur(16px) opacity(0.8);
      transform: scale(0.92, 0.96);
      z-index: -1;
      background-size: cover;
      /* border-radius: 50px 50px 1em 1em; */
      aspect-ratio: 1 / 1;
      opacity: 0;
      transition: all 1.2s;
    }
    &:hover {
      opacity: 1;
      transform: translateY(-5px);
      transition: all 0.8s;
      .shadow {
        opacity: 1;
        transition: all 0.8s;
      }
    }
  }
  .name {
    font-weight: 700;
    color: black;
    margin: 15px 0;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow: hidden;
    cursor: pointer;
  }
  .author {
    font-weight: 600;
    color: #ccc;
    margin-bottom: 15px;
    cursor: pointer;
    text-align: center;
  }
`;
