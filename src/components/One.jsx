import React, { useEffect, useRef, useState } from "react";
import ImgSyllableWrapper from "./common/ImgSyllableWrapper";
import Syllable from "./common/Syllable";
import DragItemsWrapper from "./common/DragItemsWrapper";
import { StyledOne } from "../assets/styles/one/one.styled";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

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
  const [showAnswerModal, setShowAnswerModal] = useState(false);

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
      setInitialStatus((prevStatus) =>
        prevStatus.map((status, index) =>
          index === QuizNumber ? true : status
        )
      );
      setQuizNumber((QuizNumber) => QuizNumber + 1);
      setTryCount(0);
    } else {
      setIsIncorrect(true);
      setTimeout(() => setIsIncorrect(false), 500);
      setTryCount((tryCount) => tryCount + 1);
    }
  };

  const handleDragStart = (e, value) => {
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정
  };

  // 정답맞출시
  useEffect(() => {
    if (QuizNumber > 0) {
      setFade("show");
      setShowAnswerModal(true); // 모달 표시
      setTimeout(() => {
        setFade("");
        setTimeout(() => {
          setShowAnswerModal(false);
        }, 500);
      }, 500);
    }
  }, [QuizNumber]);

  useEffect(() => {
    if (tryCount >= 2) {
      // console.log(tryCount);
      imgRefs.current[QuizNumber].classList.add("hintBorderAnimation");
      setTimeout(() => {
        imgRefs.current[QuizNumber].classList.remove("hintBorderAnimation");
      }, 2000);
    }
  }, [tryCount]);
  const next = () => {
    alert("1");
  };

  const nav = useNavigate();

  return (
    <StyledOne>
      {showAnswerModal && (
        <div className={`answerModalWrapper ${fade}`}>
          <p>✔️정답입니다!</p>
        </div>
      )}
      <div className="backgroundColor">
        <div className="contentWrapper">
          <p>기초국어 | 튼튼2</p>
          <hr />
          <p>빈칸에 알맞은 받침을 넣어 낱말을 완성해 봅시다.</p>
          <br />

          <div className="firstWrapper">
            <ImgSyllableWrapper
              show="show"
              shake={`${
                isIncorrect && initialStatus[0] === false ? "shake" : ""
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/mouseImg.png`}
                alt=""
                draggable={false}
              />
              {/* 컴포넌트 */}
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

          <hr />
        </div>
      </div>
      <DragItemsWrapper>
        {consonantArr.map((consonant, index) => (
          <img
            key={consonant}
            ref={(el) => (imgRefs.current[index] = el)}
            src={`${process.env.PUBLIC_URL}/assets/images/c_${consonant}.png`}
            alt=""
            onDragStart={(e) => handleDragStart(e, consonant)}
          />
        ))}
      </DragItemsWrapper>
      <br />
      <div className="nextPage" onClick={() => nav("/two")}>
        다음페이지
      </div>
    </StyledOne>
  );
};

export default One;
