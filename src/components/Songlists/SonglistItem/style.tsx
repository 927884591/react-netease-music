import styled from "styled-components";

export default styled.div`
  position: relative;
  width: 18.5%;
  margin-bottom: 25px;
  font-weight: 600;
  cursor: pointer;
  .cover {
    width: 100%;
    padding-top: 100%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 5px;
    }

    .playCount {
      position: absolute;
      top: 5px;
      right: 10px;
    }

    .playIcon {
      position: absolute;
      bottom: 10px;
      right: 10px;
      visibility: hidden;
    }

    &:hover .playIcon {
      visibility: visible;
    }
  }
  .name {
    margin-top: 5px;
    font-size: 0.95em;
    color: nameColor;
  }
`;
