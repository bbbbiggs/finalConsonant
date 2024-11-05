import React, { useState } from "react";
import { StyledOneRenewal } from "../assets/styles/one/onerenewal.styled";
import Syllable from "./common/Syllable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointer,
  faForward,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const OneRenewal = () => {
  const consonantArr = ["bieup", "rieul", "nieun"];
  const answerArr = ["mouse", "foot", "hand"];

  const [answerStatus, setAnswerStatus] = useState(false);
  const [quizCount, setQuizCount] = useState(0);

  const handleDrop = (e) => {
    e.preventDefault();
    const consonantValue = e.dataTransfer.getData("text/plain"); // 드래그된 값 가져오기
    const data_value = e.target.getAttribute("data-value");

    if (
      consonantArr[quizCount] === consonantValue &&
      answerArr[quizCount] === data_value
    ) {
      console.log("정답");
      setAnswerStatus(true);
    } else {
      console.log(consonantValue, data_value);
      console.log("들어오긴함");

      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleDragStart = (e, value) => {
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정

    // console.log("value: ", value);
  };

  const nextGame = () => {
    console.log("다음게임실행");
    setQuizCount((quizCount) => quizCount + 1);

    setAnswerStatus(false);
  };

  const nav = useNavigate();
  // 틀렸을시 화면흔들기
  const [shake, setShake] = useState(false);

  return (
    <StyledOneRenewal>
      <div className="topTextWrapper">
        <p className="topText">기초국어 ㅣ 튼튼2</p>
      </div>
      <p className="quizInstruction">
        빈칸에 알맞은 받침을 넣어 낱말을 완성해볼까요?
      </p>
      <div className="quizWrapper">
        <p className="correctText">{answerStatus && "정답입니다!"}</p>
        <div
          className={`quizimgsWrapper ${
            shake && answerStatus === false ? "shake" : ""
          }`}
        >
          {/* 퀴즈이미지 */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${answerArr[quizCount]}Img.png`}
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
                answerStatus
                  ? answerArr[quizCount]
                  : answerArr[quizCount] + "_before"
              }.png`}
              alt=""
              draggable={false}
              data-value={answerArr[quizCount]}
              // ref={syllableRef}
            />
          </div>
        </div>

        {/* <div className="quizimgsWrapper">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/footImg.png`}
            alt=""
            draggable={false}
          />

          <div className="syllable">
            <img
              // data-value={data.dataValue}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              src={`${process.env.PUBLIC_URL}/assets/images/${
                answerStatus ? answerArr[1] : answerArr[1] + "_before"
              }.png`}
              alt=""
              draggable={false}
              data-value={answerArr[1]}
              // ref={syllableRef}
            />
          </div>
        </div> */}
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
        {answerArr.length === quizCount + 1 ? (
          <div
            className={`nextGame nextPage ${answerStatus && "show"}`}
            onClick={() => nav("/two")}
          >
            <FontAwesomeIcon icon={faCaretRight} />
            <p>다음페이지</p>
          </div>
        ) : (
          <div
            className={`nextGame ${answerStatus && "show"}`}
            onClick={() => nextGame()}
          >
            <FontAwesomeIcon icon={faForward} />
            <p>다음으로</p>
          </div>
        )}
      </footer>
    </StyledOneRenewal>
  );
};

export default OneRenewal;
