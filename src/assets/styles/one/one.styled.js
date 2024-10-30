import styled from "styled-components";
export const StyledOne = styled.div`
  overflow-x: hidden;
  display: grid;
  justify-content: center;
  position: relative;

  .answerModalWrapper {
    background-color: rgba(255, 255, 255, 0.5);
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
      width: 200px;
      height: 200px;
      z-index: 3;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      display: grid;
      align-items: center;
      justify-content: center;
      color: black;
      background-color: white;
      font-size: 30px;
    }
  }
  .show {
    opacity: 1;
  }

  .nextPage {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #9d0657;
    border-radius: 20px;
    background-color: #ec0076;
    color: white;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      background-color: #fea443;
    }
  }

  @media (min-width: 1025px) {
    .backgroundColor {
      /* min-height: 100vh; */
      background-color: #fef7ea;
      width: 700px;
    }
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
    .backgroundColor {
      /* min-height: 100vh; */
      background-color: #fef7ea;
      /* width: 700px; */
    }
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
