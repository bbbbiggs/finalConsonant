import React, { useEffect, useState } from "react";
import ImgSyllableWrapper from "./common/ImgSyllableWrapper";
import Syllable from "./common/Syllable";
import DragItemsWrapper from "./common/DragItemsWrapper";
import { StyledOne } from "../assets/styles/one/one.styled";
import confetti from "canvas-confetti";

const One = () => {
  const [initialStatus, setInitialStatus] = useState(false);
  const [initialStatus2, setInitialStatus2] = useState(false);
  const [initialStatus3, setInitialStatus3] = useState(false);
  const [initialStatus4, setInitialStatus4] = useState(false);
  const [QuizNumber, setQuizNumber] = useState(0);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedValue = e.dataTransfer.getData("text/plain"); // 드래그된 값 가져오기
    const value = e.target.getAttribute("data-value");

    if (droppedValue === "bieup" && value === "mouse") {
      // alert("!");
      setInitialStatus(true);
      setQuizNumber((QuizNumber) => QuizNumber + 1);
    } else if (droppedValue === "rieul" && value === "foot") {
      setInitialStatus2(true);
      setQuizNumber((QuizNumber) => QuizNumber + 1);
    } else if (droppedValue === "nieun" && value === "hand") {
      setInitialStatus3(true);
      setQuizNumber((QuizNumber) => QuizNumber + 1);
    } else if (droppedValue === "mieum" && value === "mom1") {
      setInitialStatus4(true);
      setQuizNumber((QuizNumber) => QuizNumber + 1);
    } else {
      // alert("틀림");
      setIsIncorrect(true);
      setTimeout(() => setIsIncorrect(false), 500);
    }
    // console.log(QuizNumber);
  };

  const handleDragStart = (e, value) => {
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정
  };

  useEffect(() => {
    if (QuizNumber > 0) {
      var count = 200;
      var defaults = {
        origin: { y: 0.7 },
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
  }, [QuizNumber]);

  return (
    <StyledOne>
      <div className="backgroundColor">
        <div className="contentWrapper">
          <p>기초국어 | 튼튼2</p>
          <hr />
          <p>빈칸에 알맞은 받침을 넣어 낱말을 완성해 봅시다.</p>
          <br />

          <div className="firstWrapper">
            <ImgSyllableWrapper
              show="show"
              shake={`${isIncorrect && initialStatus === false ? "shake" : ""}`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/mouseImg.png`}
                alt=""
                draggable={false}
              />
              {/* 컴포넌트 */}
              <Syllable
                handleDrop={handleDrop}
                status={initialStatus}
                dataValue={"mouse"}
              />
            </ImgSyllableWrapper>
            <ImgSyllableWrapper
              show={QuizNumber >= 1 ? "show" : undefined}
              shake={`${
                isIncorrect && initialStatus2 === false ? "shake" : ""
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/footImg.png`}
                alt=""
                draggable={false}
              />
              <Syllable
                handleDrop={handleDrop}
                status={initialStatus2}
                dataValue={"foot"}
              />
            </ImgSyllableWrapper>
            <ImgSyllableWrapper
              show={QuizNumber >= 2 ? "show" : undefined}
              shake={`${
                isIncorrect && initialStatus3 === false ? "shake" : ""
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/handImg.png`}
                alt=""
                draggable={false}
              />
              <Syllable
                handleDrop={handleDrop}
                status={initialStatus3}
                dataValue={"hand"}
              />
            </ImgSyllableWrapper>
          </div>

          <div className="firstWrapper">
            <ImgSyllableWrapper
              show={QuizNumber >= 3 ? "show" : undefined}
              shake={`${
                isIncorrect && initialStatus4 === false ? "shake" : ""
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
                  status={initialStatus4}
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
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/c_bieup.png`}
          alt=""
          onDragStart={(e) => handleDragStart(e, "bieup")}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/c_nieun.png`}
          onDragStart={(e) => handleDragStart(e, "nieun")}
          alt=""
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/c_rieul.png`}
          onDragStart={(e) => handleDragStart(e, "rieul")}
          alt=""
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/c_mieum.png`}
          onDragStart={(e) => handleDragStart(e, "mieum")}
          alt=""
        />
      </DragItemsWrapper>
    </StyledOne>
  );
};

export default One;
