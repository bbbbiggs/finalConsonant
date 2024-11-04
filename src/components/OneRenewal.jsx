import React, { useState } from "react";
import { StyledOneRenewal } from "../assets/styles/one/onerenewal.styled";
import Syllable from "./common/Syllable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

const OneRenewal = () => {
  const consonantArr = ["bieup", "rieul", "nieun", "mieum"];
  const answerArr = ["mouse", "foot", "hand", "mom1"];

  const [answerStatus, setAnswerStatus] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const consonantValue = e.dataTransfer.getData("text/plain"); // 드래그된 값 가져오기
    const data_value = e.target.getAttribute("data-value");
    // console.log(consonantValue, data_value);

    if (consonantArr[0] === consonantValue && answerArr[0] === data_value) {
      console.log("정답");
      setAnswerStatus(true);
    }
  };

  const handleDragStart = (e, value) => {
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정

    // console.log("value: ", value);
  };

  return (
    <StyledOneRenewal>
      <div className="topTextWrapper">
        <p className="topText">기초국어 ㅣ 튼튼2</p>
      </div>
      <p className="quizInstruction">
        빈칸에 알맞은 받침을 넣어 낱말을 완성해볼까요?
      </p>
      <div className="quizWrapper">
        <p className="correctText">정답입니다!</p>
        <div className="quizimgsWrapper">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/mouseImg.png`}
            alt=""
            draggable={false}
          />

          {/* 음절 아,침 */}
          <div className="syllable">
            <img
              // data-value={data.dataValue}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              src={`${process.env.PUBLIC_URL}/assets/images/${
                answerStatus ? "mouse" : "mouse_before"
              }.png`}
              alt=""
              draggable={false}
              data-value={"mouse"}
              // ref={syllableRef}
            />
          </div>
        </div>
      </div>
      <footer>
        <div
          className="consonantButton"
          onDragStart={(e) => handleDragStart(e, consonantArr[0])}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/c_${consonantArr[0]}.png`}
            alt=""
          />
        </div>
        <div className="consonantButton">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/c_${consonantArr[1]}.png`}
            alt=""
            onDragStart={(e) => handleDragStart(e, consonantArr[1])}
          />
        </div>
        <div className="consonantButton">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/c_${consonantArr[2]}.png`}
            alt=""
            onDragStart={(e) => handleDragStart(e, consonantArr[2])}
          />
        </div>
      </footer>
    </StyledOneRenewal>
  );
};

export default OneRenewal;
