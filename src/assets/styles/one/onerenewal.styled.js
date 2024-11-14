import styled from "styled-components";

export const StyledOneRenewal = styled.div`
  max-width: 1440px;
  width: 100%;
  background-color: #fe9f5f;
  /* padding-top: 44px; */
  margin: auto;
  position: relative;

  .quizInstruction {
    margin-top: 25px;
    color: #ffffff;

    font-family: Roboto;
    /* font-size: 48px; */
    word-break: keep-all;
    font-size: 28px;
    font-weight: 700;
    text-align: center;

    /* box-shadow: 5px 5px 4px 0px #00000040; */
  }

  .quizWrapper {
    max-width: 1063px;
    width: 80%;
    margin: 30px auto;
    height: 404px;

    border-radius: 48px;
    border: 20px solid rgba(252, 219, 83, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    background-color: rgba(69, 83, 118, 1);

    display: grid;
    justify-items: center;
    align-content: center;

    .correctText {
      color: rgba(140, 213, 83, 1);
      height: 55px;

      font-family: Roboto;
      font-size: 41px;
      font-weight: 600;
    }

    .quizimgsWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      img {
        width: 220px;
        height: 150px;
        border: 5px solid rgba(140, 213, 83, 1);
        box-sizing: border-box;
      }
      .syllable {
        width: 150px;
        height: 150px;
        background-color: white;
        border: 1px solid #a8a9ad;
        position: relative;
        margin: 20px 0;

        &::before {
          content: "";
          position: absolute;
          background-color: transparent;
          opacity: 0.5;
          border-left: 1px dashed black;
          height: 100%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        &::after {
          content: "";
          position: absolute;
          background-color: transparent;
          opacity: 0.5;
          border-top: 1px dashed black;
          width: 100%;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        img {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
        }
      }
    }
  }

  footer {
    width: 100%;
    height: 235px;
    background-color: rgba(254, 209, 73, 1);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    .consonantButton {
      width: 150px;
      height: 150px;
      background-color: rgba(255, 247, 237, 1);
      box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 21px;
      &:hover {
        cursor: url(${process.env.PUBLIC_URL}/assets/images/cursor.png), pointer;
      }
    }
    .hintOn {
      animation: hintOn 1.5s ease-in-out forwards;
    }
    @keyframes hintOn {
      0% {
        background-color: transparent; /* 시작: 투명 */
      }
      40% {
        background-color: rgba(
          255,
          255,
          0,
          0.8
        ); /* 노란색으로 나타남, 약간 투명 */
      }
      70% {
        background-color: rgba(255, 255, 0, 1); /* 노란색 유지 */
      }
      100% {
        background-color: rgba(
          255,
          247,
          237,
          1
        ); /* 원래 색상으로 서서히 돌아감 */
      }
    }
    .consonantButton:active {
      cursor: grabbing;
    }

    .nextGame {
      background-color: #f66934;
      width: 150px;
      height: 150px;
      border: 5px solid #ffffff;
      box-shadow: 5px 5px 4px 0px #00000040;
      border-radius: 50%;

      position: absolute;
      right: 100px;

      display: grid;
      align-content: center;
      justify-items: center;
      cursor: pointer;

      opacity: 0;
      pointer-events: none;
      z-index: 3;
      /* transition: opacity 1s ease, transform 1s ease; */

      svg {
        color: white;
        width: 72px;
        height: 60px;
      }
      p {
        font-family: Roboto;
        font-size: 19px;
        font-weight: 700;
        color: white;
      }

      &.show {
        opacity: 1;
        pointer-events: auto;
      }
    }
    .nextPage {
      background-color: rgb(223 168 0);
    }
  }
`;
