import React, { useState } from "react";
import ImgSyllableWrapper from "./common/ImgSyllableWrapper";
import Syllable from "./common/Syllable";
import DragItemsWrapper from "./common/DragItemsWrapper";
import { StyledOne } from "../assets/styles/one/one.styled";

const One = () => {
  const [initialStatus, setInitialStatus] = useState(false);
  const [initialStatus2, setInitialStatus2] = useState(false);
  const [initialStatus3, setInitialStatus3] = useState(false);
  const [initialStatus4, setInitialStatus4] = useState(false);
  const [QuizNumber, setQuizNumber] = useState(0);

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
    }
    // console.log(QuizNumber);
  };

  const handleDragStart = (e, value) => {
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정
  };

  return (
    <StyledOne>
      <div className="backgroundColor">
        <div className="contentWrapper">
          <p>기초국어 | 튼튼2</p>
          <hr />
          <p>빈칸에 알맞은 받침을 넣어 낱말을 완성해 봅시다.</p>
          <br />

          <div className="firstWrapper">
            <ImgSyllableWrapper show="show">
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
            <ImgSyllableWrapper show={QuizNumber >= 1 ? "show" : undefined}>
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
            <ImgSyllableWrapper show={QuizNumber >= 2 ? "show" : undefined}>
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
            <ImgSyllableWrapper show={QuizNumber >= 3 ? "show" : undefined}>
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
