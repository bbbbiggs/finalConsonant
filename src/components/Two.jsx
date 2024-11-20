import React, { useEffect, useState } from "react";
import { StyledTwo } from "../assets/styles/two/two.styled";
import BackButton from "./common/BackButton";
import TitleAndSubTitle from "./common/TitleAndSubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import DraggableImage from "./common/DraggableImage";
import { DndContext } from "@dnd-kit/core";
import DroppableArea from "./common/DroppableArea";
import NextButton from "./common/NextButton";
import { useNavigate } from "react-router-dom";
import NextPage from "./common/NextPage";

const Two = () => {
  const nav = useNavigate();
  const [stageCount, setStageCount] = useState(0);
  const fruitStoreArr = ["watermelon", "persimmon"];
  const hospitalArr = ["nurse"];
  const bookStoreArr = ["book"];
  const [oneStageClear, setOneStageClear] = useState(false);
  // 2개 합칠예정
  const [sc, setSc] = useState([false, false, false]);

  const stageArr = ["fruitStore", "hospital", "bookStore"];
  const [nowStage, setNowStage] = useState("fruitStore"); // 처음엔 과일가게로 설정
  const [hiddenStatus, setHiddenStatus] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [gameEnd, setGameEnd] = useState(false);

  const [watermelonStatus, setWatermelonStatus] = useState(false);
  const [persimmonStatus, setPersimmonStatus] = useState(false);
  const [nurseStatus, setNurseStatus] = useState(false);
  const [bookStatus, setBookStatus] = useState(false);

  // 드래그오버시
  const consonantEnglishArr = ["giyeok", "nieun", "mieum"];
  // const [isOver, setIsOver] = useState([false, false, false]);
  const [isOver, setIsOver] = useState(
    new Array(consonantEnglishArr.length).fill(false)
  );

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

    // 초기화시키기
    setIsOver(new Array(consonantEnglishArr.length).fill(false));
  };

  const nextGame = () => {
    setOneStageClear(false);
    setStageCount(0);
    if (nowStage === "fruitStore") {
      setNowStage("hospital");

      setWatermelonStatus(false);
      setPersimmonStatus(false);
    } else if (nowStage === "hospital") {
      setNowStage("bookStore");

      setNurseStatus(false);
    }
  };

  const handleDragOver = (event) => {
    const { over } = event;

    // 처음엔 초기화
    setIsOver(new Array(consonantEnglishArr.length).fill(false));

    // over.id === "giyeok"
    if (over) {
      consonantEnglishArr.map((element, index) => {
        if (element === over.id) {
          // console.log("index: ", index);
          setIsOver((prev) => {
            const status = [...prev];
            status[index] = true;
            return status;
          });
          return index;
        }
      });
    }
  };

  useEffect(() => {
    if (nowStage === "fruitStore" && stageCount === fruitStoreArr.length) {
      setOneStageClear(true);
    } else if (nowStage === "hospital" && stageCount === hospitalArr.length) {
      setOneStageClear(true);
    } else if (nowStage === "bookStore" && stageCount === bookStoreArr.length) {
      setOneStageClear(true);
    }
  }, [stageCount]);

  useEffect(() => {
    // console.log("스테이지바뀜: ", oneStageClear, nowStage);
    if (oneStageClear === true) {
      stageArr.map((element, index) => {
        if (element === nowStage) {
          setSc((prev) => {
            const newStatus = [...prev];
            newStatus[index] = true;
            return newStatus;
          });
        }
      });
    }
  }, [oneStageClear]);

  useEffect(() => {
    console.log("현재단계:", nowStage);
  }, [nowStage]);

  return (
    <StyledTwo>
      <DndContext onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
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
        {oneStageClear && !gameEnd && <NextButton onclick={() => nextGame()} />}
        {/* 마지막 퀴즈를 맞추면 다음페이지 버튼 */}
        {gameEnd && <NextPage onclick={() => nav("/")} />}

        <TitleAndSubTitle />
        <p className="quizInstruction">
          받침을 살펴보며 낱말을 드래그 해봅시다.
        </p>
        <div className="quizWrapper">
          <div className="questionArea">
            <div
              className={`slider ${
                nowStage === "hospital"
                  ? "left1"
                  : nowStage === "bookStore"
                  ? "left2"
                  : ""
              }`}
            >
              <div className="test1">
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
              </div>
              <div className="test1">
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
              </div>
            </div>

            {/* {nowStage === "fruitStore" && (
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
            )} */}
          </div>
          <div className="dragArea">
            <DroppableArea
              consonant={"ㄱ"}
              consonantEnglish={"giyeok"}
              watermelonStatus={watermelonStatus}
              bookStatus={bookStatus}
              borderStatus={isOver[0]}
            />
            <DroppableArea
              consonant={"ㄴ"}
              consonantEnglish={"nieun"}
              nurseStatus={nurseStatus}
              borderStatus={isOver[1]}
            />
            <DroppableArea
              consonant={"ㅁ"}
              consonantEnglish={"mieum"}
              persimmonStatus={persimmonStatus}
              borderStatus={isOver[2]}
            />
          </div>
        </div>
        <div className="stageWrapper">
          {stageArr.map((element, index) => (
            <div
              key={element}
              // className="stageImgWrapper"
              className={`stageImgWrapper ${sc[index] ? "clear" : ""}`}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
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
