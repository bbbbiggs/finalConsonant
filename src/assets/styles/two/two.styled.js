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
    -webkit-text-stroke: 0.5px #ffffff;

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
      top: 10%;
      left: 46%;
      transform: translateX(-50%);
      font-size: 25px;
    }
  }

  .stageWrapper {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    gap: 25px;
    top: 25px;
    .fruitStore {
      width: 130px;
    }
  }
`;
