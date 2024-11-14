import React, { useEffect, useState } from "react";
import { StyledOneRenewal } from "../assets/styles/one/onerenewal.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { DndContext } from "@dnd-kit/core";
import DraggableImage from "./common/DraggableImage";
import BackButton from "./common/BackButton";
import TitleAndSubTitle from "./common/TitleAndSubTitle";

const OneRenewal = () => {
  const consonantArr = ["bieup", "rieul", "nieun"];
  const answerArr = ["mouse", "foot", "hand"];

  const [answerStatus, setAnswerStatus] = useState(false);
  const [quizCount, setQuizCount] = useState(0);
  // 틀렸을시 화면흔들기
  const [shake, setShake] = useState(false);

  const [tryCount, setTryCount] = useState(0);

  const nav = useNavigate();
  const [tryTwo, setTryTwo] = useState([false, false, false]);

  const handleDrop = (e) => {
    e.preventDefault();
    const consonantValue = e.dataTransfer.getData("text/plain"); // 드래그된 값 가져오기
    const data_value = e.target.getAttribute("data-value");

    if (
      consonantArr[quizCount] === consonantValue &&
      answerArr[quizCount] === data_value
    ) {
      console.log("정답");

      setTryCount(0); // 시도횟수0으로 변경

      setAnswerStatus(true);
    } else {
      // console.log(consonantValue, data_value);

      setTryCount((tryCount) => tryCount + 1);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  useEffect(() => {
    console.log("시도횟수: ", tryCount);

    if (tryCount >= 2) {
      if (tryTwo[quizCount] === false) {
        setTryTwo((prevTryTwo) => {
          const newTryTwo = [...prevTryTwo];
          newTryTwo[quizCount] = true;
          return newTryTwo;
        });
        setTimeout(() => {
          setTryTwo((prevTryTwo) => {
            const newTryTwo = [...prevTryTwo];
            newTryTwo[quizCount] = false;
            return newTryTwo;
          });
        }, 1500);

        // setTryTwo(true);
        // setTimeout(() => {
        //   setTryTwo(false);
        // }, 1500);
      }
    }
  }, [tryCount]);

  const handleDragStart = (e, value) => {
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정

    // console.log("value: ", value);
  };

  const nextGame = () => {
    console.log("다음게임실행");
    setQuizCount((quizCount) => quizCount + 1);

    setAnswerStatus(false);
  };

  return (
    <StyledOneRenewal>
      <DndContext>
        <BackButton />
        <TitleAndSubTitle />
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
              src={`${process.env.PUBLIC_URL}/assets/images/one/${answerArr[quizCount]}Img.png`}
              alt=""
              draggable={false}
            />

            {/* 음절 아,침 */}
            <div className="syllable">
              <img
                // data-value={data.dataValue}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                src={`${process.env.PUBLIC_URL}/assets/images/one/${
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
        <footer className={`${answerStatus ? "dragDisabled" : ""}`}>
          {consonantArr.map((element, index) => (
            <img
              key={element}
              src={`${process.env.PUBLIC_URL}/assets/images/one/c_${consonantArr[index]}.png`}
              className={`consonantButton ${tryTwo[index] ? "hintOn" : ""}`}
              onDragStart={(e) => handleDragStart(e, consonantArr[index])}
              alt=""
            />
          ))}

          <DraggableImage
            src={`${process.env.PUBLIC_URL}/assets/images/one/c_${consonantArr[0]}.png`}
            className={`consonantButton`}
            onDragStart={(e) => handleDragStart(e, consonantArr[0])}
            dragValue={"abc"}
          />

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
      </DndContext>
    </StyledOneRenewal>
  );
};

export default OneRenewal;
