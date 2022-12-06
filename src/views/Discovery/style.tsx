import styled, { keyframes } from "styled-components";

const animate = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-200px);
  }
`;

export default styled.div`
  .forYou {
    .recommend {
      display: flex;
      justify-content: space-around;
      .recommendDaily {
        position: relative;
        height: 200px;
        overflow: hidden;
        border-radius: 10px;
        .animate {
          animation: ${animate} 50s 1s infinite alternate;
        }
        .text {
          position: absolute;
          font-weight: 700;
          font-size: 39px;
          color: white;
          top: 86px;
          left: 13px;
          width: 100px;
          letter-spacing: 11px;
          line-height: 55px;
          user-select: none;
        }
        transition: transform 0.8s;
        &:hover {
          transform: translate(0, -5px);
          transition: transform 0.8s;
        }
      }
    }
  }
  .recommandArtist {
    .artist {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
  .bank {
    .bankList {
      display: flex;
      justify-content: space-evenly;
    }
  }
  .newAlbum {
    .newAlbumList {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`;
