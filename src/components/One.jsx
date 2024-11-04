import React, { useEffect, useRef, useState } from "react";
import ImgSyllableWrapper from "./common/ImgSyllableWrapper";
import Syllable from "./common/Syllable";
import DragItemsWrapper from "./common/DragItemsWrapper";
import { StyledOne } from "../assets/styles/one/one.styled";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const One = () => {
  const [initialStatus, setInitialStatus] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [QuizNumber, setQuizNumber] = useState(0);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [tryCount, setTryCount] = useState(0);
  const imgRefs = useRef([]);
  const [showAnswerStatus, setShowAnswerStatus] = useState(0);

  const answerArr = ["mouse", "foot", "hand", "mom1"];
  const consonantArr = ["bieup", "rieul", "nieun", "mieum"];

  // 애니메이션
  const [fade, setFade] = useState(""); // 모달 애니메이션 상태

  const handleDrop = (e) => {
    e.preventDefault();
    const consonantValue = e.dataTransfer.getData("text/plain"); // 드래그된 값 가져오기
    const data_value = e.target.getAttribute("data-value");
    // console.log(consonantValue, data_value, QuizNumber);

    if (
      consonantValue === consonantArr[QuizNumber] &&
      data_value === answerArr[QuizNumber]
    ) {
      // 정답시 동그라미효과주기 initialStatus true로 주기
      setInitialStatus((prevStatus) =>
        prevStatus.map((status, index) =>
          index === QuizNumber ? true : status
        )
      );
      setTryCount(0);
      setShowAnswerStatus(true);
    } else {
      setIsIncorrect(true);
      setTimeout(() => setIsIncorrect(false), 500);
      setTryCount((tryCount) => tryCount + 1);

      setShowAnswerStatus(false);
    }
  };

  const handleDragStart = (e, value) => {
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정
  };

  // 2번틀릴시
  useEffect(() => {
    if (tryCount >= 2) {
      // console.log(tryCount);
      imgRefs.current[QuizNumber].classList.add("hintBorderAnimation");
      setTimeout(() => {
        imgRefs.current[QuizNumber].classList.remove("hintBorderAnimation");
      }, 1000);
    }
  }, [tryCount, QuizNumber]);

  const nextQuiz = () => {
    // footer 상태값 초기화
    setShowAnswerStatus(0);

    setTimeout(() => {
      setQuizNumber((QuizNumber) => QuizNumber + 1);
    }, 100);
  };

  const nav = useNavigate();

  // 드래그 시작했을때 실행
  // useEffect(() => {
  //   if (tryCount > 0) {
  //     console.log("옌?");
  //     if (initialStatus[QuizNumber] === true) {
  //       console.log("엥", showAnswerStatus);
  //       setShowAnswerStatus(true);
  //     } else {
  //       setShowAnswerStatus(false);
  //     }
  //   }
  // }, [tryCount, showAnswerStatus, initialStatus, QuizNumber]);

  return (
    <StyledOne>
      {/* {showAnswerModal && (
        <div className={`answerModalWrapper ${fade}`}>
          <p>✔️정답입니다!</p>
        </div>
      )} */}
      {/* <DragDropContext onDragEnd={onDragEnd}> */}
      {/* 드롭이 가능한 영역 */}
      {/* <Droppable></Droppable> */}
      <div className="backgroundColor">
        <div className="contentWrapper">
          <p>기초국어 | 튼튼2</p>
          <hr />
          <p>빈칸에 알맞은 받침을 넣어 낱말을 완성해 봅시다.</p>
          <br />

          <div className="firstWrapper">
            <ImgSyllableWrapper
              // disappear={disappear}
              show={"show"}
              shake={`${
                isIncorrect && initialStatus[0] === false ? "shake" : ""
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/mouseImg.png`}
                alt=""
                draggable={false}
              />
              <Syllable
                handleDrop={handleDrop}
                status={initialStatus[0]}
                dataValue={"mouse"}
              />
            </ImgSyllableWrapper>
            <ImgSyllableWrapper
              show={QuizNumber >= 1 ? "show" : undefined}
              shake={`${
                isIncorrect && initialStatus[1] === false ? "shake" : ""
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/footImg.png`}
                alt=""
                draggable={false}
              />
              <Syllable
                handleDrop={handleDrop}
                status={initialStatus[1]}
                dataValue={"foot"}
              />
            </ImgSyllableWrapper>
            <ImgSyllableWrapper
              show={QuizNumber >= 2 ? "show" : undefined}
              shake={`${
                isIncorrect && initialStatus[2] === false ? "shake" : ""
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/handImg.png`}
                alt=""
                draggable={false}
              />
              <Syllable
                handleDrop={handleDrop}
                status={initialStatus[2]}
                dataValue={"hand"}
              />
            </ImgSyllableWrapper>
          </div>
          <div className="firstWrapper">
            <ImgSyllableWrapper
              show={QuizNumber >= 3 ? "show" : undefined}
              shake={`${
                isIncorrect && initialStatus[3] === false ? "shake" : ""
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/momImg.png`}
                alt=""
                draggable={false}
              />

              <div className="wordWrapper">
                <Syllable
                  handleDrop={handleDrop}
                  status={initialStatus[3]}
                  dataValue={"mom1"}
                />
                <Syllable
                  handleDrop={handleDrop}
                  status={true}
                  dataValue={"mom2"}
                />
              </div>
            </ImgSyllableWrapper>
          </div>
        </div>
      </div>
      <br />
      <DragItemsWrapper>
        {consonantArr.map((consonant, index) => (
          // <Draggable></Draggable>
          <img
            key={consonant}
            ref={(el) => (imgRefs.current[index] = el)}
            src={`${process.env.PUBLIC_URL}/assets/images/c_${consonant}.png`}
            alt=""
            // draggable={false}
            onDragStart={(e) => handleDragStart(e, consonant)}
          />
        ))}
      </DragItemsWrapper>
      {/* </DragDropContext> */}
      <br />
      {showAnswerStatus === true && (
        <footer className="answerCorrect">
          <div className="circle">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <span>정답입니다!</span>
          {QuizNumber >= 3 ? (
            <div className="nextPage" onClick={() => nav("/two")}>
              다음 페이지
            </div>
          ) : (
            <div className="nextPage" onClick={() => nextQuiz()}>
              계속하기
            </div>
          )}
        </footer>
      )}
      {/* {showAnswerStatus === false && (
        <footer className="answerInCorrect">
          <div className="circle">
            <FontAwesomeIcon icon={faX} />
          </div>
        </footer>
      )} */}
      {/* <div className="nextPage" onClick={() => nav("/two")}>
      다음 페이지
      </div> */}
      {/* <div className="nextPage" onClick={() => nextQuiz()}>
        계속하기
      </div> */}
    </StyledOne>
  );
};

export default One;
