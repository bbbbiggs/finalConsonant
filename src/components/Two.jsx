import React, { useEffect, useState } from "react";
import { StyledTwo } from "../assets/styles/two/two.styled";
import BackButton from "./common/BackButton";
import TitleAndSubTitle from "./common/TitleAndSubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

const Two = () => {
  const [stageCount, setStageCount] = useState(0);

  const handleDragStart = (e, value) => {
    e.dataTransfer.setData("text/plain", value); // 드래그 데이터를 설정
  };

  const handleDrop = (e) => {
    const consonantValue = e.dataTransfer.getData("text/plain"); // 드래그된 값 가져오기
    const data_value = e.target.getAttribute("data-value");
    console.log("드래그한이미지, 받침값: ", consonantValue, data_value);

    if (consonantValue === "watermelon" && data_value === "giyeok") {
      console.log("정답");
      setStageCount((stageCount) => stageCount + 1);
      document.querySelector(".watermelon").style.display = "none";
      document.querySelector(".list_watermelon").style.display = "block";
    } else if (consonantValue === "persimmon" && data_value === "mieum") {
      setStageCount((stageCount) => stageCount + 1);
      document.querySelector(".persimmon").style.display = "none";
      document.querySelector(".list_persimmon").style.display = "block";
    }
  };

  useEffect(() => {
    console.log(stageCount);
    if (stageCount === 2) {
      document.querySelector(".fruitStore").style.opacity = "0.5";
      document.querySelector(".stageImgWrapper svg").style.display = "block";
    }
  }, [stageCount]);

  const stageSelect = (store) => {
    setNowStage(store);
    console.log("눌림!!", store);
  };

  const stageArr = ["fruitStore", "hospital", "bookStore"];
  const [nowStage, setNowStage] = useState("fruitStore"); // 처음엔 과일가게로 설정

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
          {nowStage === "fruitStore" && (
            <>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/two/quizImg/fruitStore.png`}
                alt=""
                draggable={false}
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/watermelon.png`}
                alt=""
                className="watermelon"
                // draggable={false}
                onDragStart={(e) => handleDragStart(e, "watermelon")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/persimmon.png`}
                alt=""
                className="persimmon"
                // draggable={false}
                onDragStart={(e) => handleDragStart(e, "persimmon")}
              />
            </>
          )}
          {nowStage === "hospital" && (
            <>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/two/quizImg/hospital.png`}
                alt=""
                draggable={false}
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/nurse.png`}
                alt=""
                className="nurse"
                // draggable={false}
                onDragStart={(e) => handleDragStart(e, "nurse")}
              />
            </>
          )}
          {nowStage === "bookStore" && (
            <>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/two/quizImg/bookStore.png`}
                alt=""
                draggable={false}
              />
            </>
          )}
        </div>
        <div className="dragArea">
          <div className="boardWrapper">
            <img
              onDragOver={(e) => e.preventDefault()}
              // dragover 이벤트 발생 시 기본 동작을 막아주는 역할을 함.
              // 일반적으로 HTML 요소에서 dragover이벤트는 기본적으로 드래그된 요소가 해당 위치에 드롭되지 못하도록 함. 따라서 preventDefault를 호출하면 드래그된 요소를 해당 위치에 드롭할 수 있는 상태가 됨.
              //e.preventDefault()는 브라우저가 기본적으로 드롭을 허용하지 않는 것을 막아, 이후 onDrop 이벤트가 발생할 수 있도록 도와준다.
              onDrop={handleDrop}
              src={`${process.env.PUBLIC_URL}/assets/images/two/board.png`}
              alt=""
              draggable={false}
              data-value={"giyeok"}
            />
            <p className="boardTitle">'ㄱ'받침</p>
            <div className="wordListWrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/watermelon.png`}
                alt=""
                className="list_watermelon"
                draggable={false}
              />
            </div>
          </div>
          <div className="boardWrapper">
            <img
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              src={`${process.env.PUBLIC_URL}/assets/images/two/board.png`}
              alt=""
              draggable={false}
              data-value={"nieun"}
            />
            <p className="boardTitle">'ㄴ'받침</p>
          </div>
          {/* <div className="boardWrapper">
            <img
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              src={`${process.env.PUBLIC_URL}/assets/images/two/board.png`}
              alt=""
              draggable={false}
              data-value={"rieul"}
            />
            <p className="boardTitle">'ㄹ'받침</p>
          </div> */}
          <div className="boardWrapper">
            <img
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              src={`${process.env.PUBLIC_URL}/assets/images/two/board.png`}
              alt=""
              draggable={false}
              data-value={"mieum"}
            />
            <p className="boardTitle">'ㅁ'받침</p>
            <div className="wordListWrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/persimmon.png`}
                alt=""
                draggable={false}
                className="list_persimmon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="stageWrapper">
        {stageArr.map((element, index) => (
          <div
            key={element}
            className="stageImgWrapper"
            onClick={() => stageSelect(element)}
          >
            <FontAwesomeIcon icon={faSquareCheck} />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/two/store/${element}.jpeg`}
              alt=""
              className={element}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </StyledTwo>
  );
};

export default Two;
