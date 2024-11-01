import styled from "styled-components";
export const StyledOne = styled.div`
  overflow-x: hidden;
  display: grid;
  justify-content: center;
  position: relative;
  /* background-color: beige; */

  .answerModalWrapper {
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
    /* display: none; */
    p {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 150px;
      z-index: 3;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      display: grid;
      align-items: center;
      justify-content: center;
      color: black;
      background-color: white;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .show {
    opacity: 1;
  }

  footer {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #e5e5e5;
    background-color: #ffccea;

    .circle {
      background-color: white;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }

    .nextPage {
      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #65558f;
      font-weight: bold;
      background-color: #ece6f0;
      border-radius: 16px;

      box-shadow: var(
        --m3-elevation-light-3-box-shadow,
        0px 1px 3px 0px rgba(0, 0, 0, 0.3),
        0px 4px 8px 3px rgba(0, 0, 0, 0.15)
      );
      &:hover {
        cursor: pointer;
        background-color: #eddaf9;
      }
    }
  }
  .backgroundColor {
    /* min-height: 100vh; */
    /* background-color: #fef7ea; */
    width: 700px;
  }

  @media (min-width: 1025px) {
    .contentWrapper {
      width: 90%;
      /* overflow: hidden; */
      /* height: 700px; */
      margin: auto;
      position: relative;
      padding-top: 20px;
      /* background-color: yellow; */
    }
    hr {
      margin: 5px 0;
    }

    .quizWrapper {
      /* background-color: yellow; */
      display: inline-block;
      text-align: center;
      margin-right: 10px;
    }
    .quizWrapper img {
      width: 150px;
    }

    .firstWrapper {
      display: flex;
      justify-content: center;
      gap: 50px;
      /* background-color: yellow; */
    }
  }
  @media (max-width: 1024px) {
    .contentWrapper {
      width: 90%;
      /* overflow: hidden; */
      /* height: 700px; */
      margin: auto;
      position: relative;
      padding-top: 20px;
      /* background-color: yellow; */
    }
    hr {
      margin: 5px 0;
    }

    .quizWrapper {
      /* background-color: yellow; */
      display: inline-block;
      text-align: center;
      margin-right: 10px;
    }
    .quizWrapper img {
      width: 150px;
    }

    .firstWrapper {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
`;
