import React, { useEffect, useState } from "react";
import { StyledTwo } from "../assets/styles/two/two.styled";
import BackButton from "./common/BackButton";
import TitleAndSubTitle from "./common/TitleAndSubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import DraggableImage from "./common/DraggableImage";
import { DndContext } from "@dnd-kit/core";
import DroppableArea from "./common/DroppableArea";
import NextButton from "./common/NextButton";
import { useNavigate } from "react-router-dom";
import NextPage from "./common/NextPage";

const Two = () => {
  const [stageCount, setStageCount] = useState(0);
  const fruitStoreArr = ["watermelon", "persimmon"];
  const hospitalArr = ["nurse"];
  const [oneStageClear, setOneStageClear] = useState(false);
  // 2개 합칠예정
  const [stageClear, setStageClear] = useState([false, false, false]);

  const stageArr = ["fruitStore", "hospital", "bookStore"];
  const [nowStage, setNowStage] = useState("fruitStore"); // 처음엔 과일가게로 설정
  const [hiddenStatus, setHiddenStatus] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [gameEnd, setGameEnd] = useState(false);

  // const [blockStatus, setBlockStatus] = useState([false, false, false]);
  const [watermelonStatus, setWatermelonStatus] = useState(false);
  const [persimmonStatus, setPersimmonStatus] = useState(false);
  const [nurseStatus, setNurseStatus] = useState(false);
  const [bookStatus, setBookStatus] = useState(false);

  useEffect(() => {
    if (nowStage === "fruitStore" && stageCount === fruitStoreArr.length) {
      setOneStageClear(true);
    } else if (nowStage === "hospital" && stageCount === hospitalArr.length) {
      setOneStageClear(true);
    }
  }, [stageCount]);

  useEffect(() => {
    // console.log("스테이지바뀜: ", oneStageClear, nowStage);
    if (oneStageClear === true) {
      stageArr.map((element, index) => {
        if (element === nowStage) {
          setStageClear((prev) => {
            const newStatus = [...prev];
            newStatus[index] = true;
            return newStatus;
          });
        }
      });
    }

    // if (oneStageClear === true) {
    //   setStageClear((prev) => {
    //     const newStatus = [...prev];
    //     newStatus[0] = true;
    //     return newStatus;
    //   });
    // }
  }, [oneStageClear]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    // active 드래그할 요소 / over 드래그할영역
    if (over) {
      if (active.id === "watermelon" && over.id === "giyeok") {
        console.log("수박 정답!");
        setWatermelonStatus(true);

        setStageCount((stageCount) => stageCount + 1);
        setHiddenStatus((prevStatus) => {
          const newStatus = [...prevStatus];
          newStatus[0] = true;
          return newStatus;
        });

        // setBlockStatus((prevStatus) => {
        //   const newStatus = [...prevStatus];
        //   newStatus[0] = "block";
        //   return newStatus;
        // });
      } else if (active.id === "persimmon" && over.id === "mieum") {
        console.log("감 정답!");
        setStageCount((stageCount) => stageCount + 1);
        setHiddenStatus((prevStatus) => {
          const newStatus = [...prevStatus];
          newStatus[1] = true;
          return newStatus;
        });

        setPersimmonStatus(true);
      } else if (active.id === "nurse" && over.id === "nieun") {
        console.log("간호사 정답!");
        setStageCount((stageCount) => stageCount + 1);
        setHiddenStatus((prevStatus) => {
          const newStatus = [...prevStatus];
          newStatus[2] = true;
          return newStatus;
        });

        setNurseStatus(true);
      } else if (active.id === "book" && over.id === "giyeok") {
        console.log("책 정답!");

        setStageCount((stageCount) => stageCount + 1);
        setHiddenStatus((prevStatus) => {
          const newStatus = [...prevStatus];
          newStatus[3] = true;
          return newStatus;
        });

        setBookStatus(true);

        setGameEnd(true); // 게임종료시 실행시키기
      }
    }
  };

  const nextGame = () => {
    setOneStageClear(false);
    if (nowStage === "fruitStore") {
      setNowStage("hospital");
      setStageCount(0);

      setWatermelonStatus(false);
      setPersimmonStatus(false);
    } else if (nowStage === "hospital") {
      setNowStage("bookStore");

      setNurseStatus(false);
    }
  };

  const nav = useNavigate();

  return (
    <StyledTwo>
      <DndContext onDragEnd={handleDragEnd}>
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
        {/* 정답을 맞추면, clear 상태일때, */}
        {oneStageClear && <NextButton onclick={() => nextGame()} />}
        {/* 마지막 퀴즈를 맞추면 다음페이지 버튼 */}
        {gameEnd && <NextPage onclick={() => nav("/")} />}

        <TitleAndSubTitle />
        <p className="quizInstruction">
          받침을 살펴보며 낱말을 드래그 해봅시다.
        </p>
        <div className="quizWrapper">
          <div className="questionArea">
            {nowStage === "fruitStore" && (
              <>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/two/quizImg/fruitStore.png`}
                  alt=""
                  draggable={false}
                />
                <DraggableImage
                  src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/watermelon.png`}
                  className={`watermelon ${hiddenStatus[0] ? "hidden" : ""}`}
                  dragImgId={"watermelon"}
                />
                <DraggableImage
                  src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/persimmon.png`}
                  className={`persimmon ${hiddenStatus[1] ? "hidden" : ""}`}
                  dragImgId={"persimmon"}
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
                <DraggableImage
                  src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/nurse.png`}
                  className={`nurse ${hiddenStatus[2] ? "hidden" : ""}`}
                  dragImgId={"nurse"}
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
                <DraggableImage
                  src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/book.png`}
                  className={`book ${hiddenStatus[3] ? "hidden" : ""}`}
                  dragImgId={"book"}
                />
              </>
            )}
          </div>
          <div className="dragArea">
            <DroppableArea
              consonant={"ㄱ"}
              consonantEnglish={"giyeok"}
              watermelonStatus={watermelonStatus}
              bookStatus={bookStatus}
            />
            <DroppableArea
              consonant={"ㄴ"}
              consonantEnglish={"nieun"}
              nurseStatus={nurseStatus}
            />
            <DroppableArea
              consonant={"ㅁ"}
              consonantEnglish={"mieum"}
              persimmonStatus={persimmonStatus}
            />
          </div>
        </div>
        <div className="stageWrapper">
          {stageArr.map((element, index) => (
            <div
              key={element}
              // className="stageImgWrapper"
              className={`stageImgWrapper ${stageClear[index] ? "clear" : ""}`}
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
      </DndContext>
    </StyledTwo>
  );
};

export default Two;
