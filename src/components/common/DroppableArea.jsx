import { useDroppable } from "@dnd-kit/core";
import React from "react";
import StarCircle from "./StarCircle";
import { StyledDroppableArea } from "../../assets/styles/common/droppableArea.styled";

const DroppableArea = (data) => {
  const { setNodeRef } = useDroppable({
    id: data.consonantEnglish,
  });
  // console.log(data.borderStatus);
  return (
    <StyledDroppableArea
      ref={setNodeRef}
      className={data.fail ? "lightShake" : ""}
    >
      <div className={data.borderStatus ? "rainbow" : ""}>
        <img
          // onDragOver={(e) => e.preventDefault()}
          // dragover 이벤트 발생 시 기본 동작을 막아주는 역할을 함.
          // 일반적으로 HTML 요소에서 dragover이벤트는 기본적으로 드래그된 요소가 해당 위치에 드롭되지 못하도록 함. 따라서 preventDefault를 호출하면 드래그된 요소를 해당 위치에 드롭할 수 있는 상태가 됨.
          //e.preventDefault()는 브라우저가 기본적으로 드롭을 허용하지 않는 것을 막아, 이후 onDrop 이벤트가 발생할 수 있도록 도와준다.
          // onDrop={handleDrop}
          src={`${process.env.PUBLIC_URL}/assets/images/two/board.png`}
          alt=""
          draggable={false}
          data-value={data.consonantEnglish}
          className={"boardImg"}
        />
      </div>
      <p className="boardTitle">'{data.consonant}'받침</p>
      <div className="wordListWrapper">
        <div className={data.watermelonStatus ? "block" : "hidden"}>
          <StarCircle />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/watermelon.png`}
            alt=""
            draggable={false}
          />
        </div>
        <div className={data.persimmonStatus ? "block" : "hidden"}>
          <StarCircle />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/persimmon.png`}
            alt=""
            draggable={false}
          />
        </div>
        <div className={data.nurseStatus ? "block" : "hidden"}>
          <StarCircle />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/nurse.png`}
            alt=""
            draggable={false}
          />
        </div>
        <div className={data.bookStatus ? "block" : "hidden"}>
          <StarCircle />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/two/textImg/book.png`}
            alt=""
            draggable={false}
          />
        </div>
      </div>
    </StyledDroppableArea>
  );
};

export default DroppableArea;
