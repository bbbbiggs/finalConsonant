import React from "react";
import { StyledTwo } from "../assets/styles/two/two.styled";
import BackButton from "./common/BackButton";
import TitleAndSubTitle from "./common/TitleAndSubTitle";

const Two = () => {
  return (
    <StyledTwo>
      <div className="footerBackground"></div>
      <div className="cloud">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/two/cloud/cloud1.png`}
          alt=""
          className="cloud1"
          draggable={false}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/two/cloud/cloud2.png`}
          alt=""
          className="cloud2"
          draggable={false}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/two/cloud/cloud3.png`}
          alt=""
          className="cloud3"
          draggable={false}
        />
      </div>
      <BackButton />
      <TitleAndSubTitle />

      <p className="quizInstruction">받침을 살펴보며 낱말을 드래그 해봅시다.</p>
      <div className="quizWrapper">
        <div className="questionArea">
          {/* <p>과일가게</p> */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/two/fruitStore.png`}
            alt=""
            draggable={false}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/watermelon.png`}
            alt=""
            className="watermelon"
            draggable={false}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/persimmon.png`}
            alt=""
            className="persimmon"
            draggable={false}
          />
        </div>
        <div className="dragArea">
          <div className="boardWrapper">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/two/board.png`}
              alt=""
              draggable={false}
            />
            <p className="boardTitle">'ㄱ'받침</p>
          </div>
          <div className="boardWrapper">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/two/board.png`}
              alt=""
              draggable={false}
            />
            <p className="boardTitle">'ㄴ'받침</p>
          </div>
          <div className="boardWrapper">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/two/board.png`}
              alt=""
              draggable={false}
            />
            <p className="boardTitle">'ㄹ'받침</p>
          </div>
        </div>
      </div>

      <div className="stageWrapper">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/two/store/fruitStore.jpeg`}
          alt=""
          className="fruitStore"
          draggable={false}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/two/store/hospital.webp`}
          alt=""
          className="fruitStore"
          draggable={false}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/two/store/books.webp`}
          alt=""
          className="fruitStore"
          draggable={false}
        />
      </div>
    </StyledTwo>
  );
};

export default Two;
