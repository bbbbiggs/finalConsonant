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
      /* position: relative;
      display: grid;
      align-items: center;
      justify-content: center; */

      .swiper {
        display: flex;
        position: relative;
        .store1,
        .store2,
        .store3 {
          flex-shrink: 0;
          width: 330px;
          height: 410px;
          box-sizing: border-box;

          display: grid;
          align-items: center;
          justify-content: center;
          transition: left 1s ease-in-out, opacity 1s ease-out;
        }

        .store1 {
          left: 0;
        }

        .store2 {
          left: 0;
          position: relative;
          opacity: 0;
        }
        .store3 {
          left: 330px;
          position: absolute;
          opacity: 0;
        }
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
