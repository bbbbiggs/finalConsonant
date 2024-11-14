import { DndContext, useDroppable, closestCenter } from "@dnd-kit/core";
import React from "react";
import DraggableImage from "./common/DraggableImage";
import styled from "styled-components";

const StyledTest = styled.div`
  img {
    width: 100px;
  }
  .dragArea {
    width: 500px;
    height: 500px;
    background-color: yellowgreen;
  }
`;

const Test = () => {
  const { setNodeRef } = useDroppable({
    id: "dragArea", // 드롭 가능한 영역의 ID 설정
  });

  const handleDragEnd = (event) => {
    console.log("드래그 종료 이벤트:", event);
    if (event.over && event.over.id === "dragArea") {
      console.log("드롭 성공");
    }
  };

  return (
    <StyledTest>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
        <DraggableImage
          id="draggable-image" // DraggableImage에 id 추가
          src={`${process.env.PUBLIC_URL}/assets/images/c_bieup.png`}
          className="consonantButton hintOn"
        />

        <div ref={setNodeRef} className="dragArea">
          드래그영역
        </div>
      </DndContext>
    </StyledTest>
  );
};

export default Test;
