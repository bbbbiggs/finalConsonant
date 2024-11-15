import styled from "styled-components";

export const StyledTwo = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  /* padding-top: 44px; */
  position: relative;
  background-color: #81e5fd;
  height: 919px;
  .quizInstruction {
    color: #000000;
    font-family: "Roboto-Medium";
    font-size: 30px;
    font-weight: 500;
    position: relative;
    /* -webkit-text-stroke: 0.5px #ffffff; */

    margin: 53px 0;
    margin-left: 69px;
  }
  .quizWrapper {
    margin-left: 48px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;

    .questionArea {
      width: 350px;
      height: 430px;
      border: 10px solid black;
      box-sizing: border-box;
      background-color: white;
      margin-right: 43px;
      display: grid;
      align-items: center;
      justify-items: center;
      position: relative;

      .watermelon {
        position: absolute;
        left: 10px;
        top: 150px;
        cursor: pointer;
      }
      .persimmon {
        position: absolute;
        right: 0;
        top: 220px;
        cursor: pointer;
      }
      .nurse {
        position: absolute;
        bottom: 84px;
        left: 145px;
        cursor: pointer;
      }
    }
    .dragArea {
      /* background-color: bisque; */
      display: flex;
      gap: 43px;
    }
  }
  .footerBackground {
    width: 100%;
    height: 356px;
    background-color: #8fcd56;
    position: absolute;
    top: 563px;
    z-index: 1;
  }
  .cloud {
    position: relative;
    .cloud1 {
      position: absolute;
      left: 607px;
    }
    .cloud2 {
      position: absolute;
      left: 1044px;
    }
    .cloud3 {
      position: absolute;
      top: 229px;
      right: 0;
    }
  }
  .boardWrapper {
    position: relative;
    width: 253px;
    .boardTitle {
      position: absolute;
      top: 33px;
      left: 46%;
      transform: translateX(-50%);
      font-size: 25px;
    }
    .wordListWrapper {
      /* width: 140px; */
      /* background-color: yellow; */
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;

      .list_watermelon,
      .list_persimmon {
        display: none;
      }
    }
  }

  .stageWrapper {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    gap: 25px;
    top: 25px;

    .stageImgWrapper {
      position: relative;
      cursor: pointer;
      svg {
        font-size: 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: black;
        z-index: 1;
        display: none;
      }
    }
    .fruitStore,
    .hospital,
    .bookStore {
      width: 130px;
    }
  }
`;
