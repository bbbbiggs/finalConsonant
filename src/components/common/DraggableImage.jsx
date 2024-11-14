import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableImage = (data) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: data.buttonValue,
  });
  const style = {
    aspectRatio: "1", // 60/60으로 설정하려면 '1'로 설정
    cursor: "grab", // no-drop 대신 grab으로 설정
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : "none",
    zIndex: 2,
  };
  return (
    <img
      ref={setNodeRef}
      //   src={`${process.env.PUBLIC_URL}/assets/images/footImg.png`}
      src={data.src}
      className={data.className}
      alt="draggable"
      style={style}
      {...listeners}
      {...attributes}
    />
  );
};

export default DraggableImage;
