import React, { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableImage = (data) => {
  const [lastTransform, setLastTransform] = useState(null);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: data.dragImgId,
  });
  const style = {
    aspectRatio: "1", // 60/60으로 설정하려면 '1'로 설정
    cursor: "grab", // no-drop 대신 grab으로 설정
    zIndex: 2,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : lastTransform
      ? `translate3d(${lastTransform.x}px, ${lastTransform.y}px, 0)`
      : "none",
    transition: transform ? "none" : "transform 0.5s ease",
  };

  useEffect(() => {
    // 드래그가 끝났을때
    if (!transform) {
      setLastTransform({ x: 0, y: 0 });
    }
  }, [transform]);
  return (
    <img
      ref={setNodeRef}
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
