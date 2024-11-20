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
  overflow: hidden;
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
      /* overflow-x: scroll; */

      .slider {
        width: 1000px;
        height: 100%;
        background-color: yellow;
        display: flex;
        position: relative;
      }

      .left1 {
        left: -360px;
      }
      .left2 {
        left: -720px;
      }

      .test1 {
        position: relative;
        box-sizing: border-box;
        width: 350px;

        display: grid;
        align-items: center;
        justify-items: center;
      }

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
      .book {
        position: absolute;
        top: 179px;
        left: 175px;
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

  .stageWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 25px;
    top: 25px;

    .stageImgWrapper {
      position: relative;
      svg {
        font-size: 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: white;
        z-index: 1;
        display: none;
      }
      &.clear {
        img {
          opacity: 0.5;
        }
        svg {
          display: block;
        }
      }
    }
    .fruitStore,
    .hospital,
    .bookStore {
      width: 130px;
    }
  }
`;
