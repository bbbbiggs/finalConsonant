import React, { useEffect, useRef } from "react";
import { StyledSyllable } from "../../assets/styles/common/syllable.styled";

const Syllable = (data) => {
  const syllableRef = useRef(null);

  useEffect(() => {
    const handleDragEnter = (event) => {
      if (event.target === syllableRef.current) {
        // event.target.style.border = "3px dotted red";
        event.target.classList.add("borderAnimation");
      }
    };

    const handleDragLeave = (event) => {
      if (event.target === syllableRef.current) {
        // event.target.style.border = ""; // 드래그가 벗어날 때 스타일 초기화
        event.target.classList.remove("borderAnimation");
      }
    };

    const handleDrop = (event) => {
      if (event.target === syllableRef.current) {
        // event.target.style.border = ""; // 드롭 후 스타일 초기화
        event.target.classList.remove("borderAnimation");
      }
    };

    const currentElement = syllableRef.current;
    currentElement.addEventListener("dragenter", handleDragEnter);
    currentElement.addEventListener("dragleave", handleDragLeave);
    currentElement.addEventListener("drop", handleDrop);

    return () => {
      currentElement.removeEventListener("dragenter", handleDragEnter);
      currentElement.removeEventListener("dragleave", handleDragLeave);
      currentElement.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <StyledSyllable
      onDragOver={data.status ? null : (e) => e.preventDefault()}
      onDrop={data.handleDrop}
    >
      <img
        data-value={data.dataValue}
        src={`${process.env.PUBLIC_URL}/assets/images/${
          data.status ? data.dataValue : data.dataValue + "_before"
        }.png`}
        alt=""
        draggable={false}
        ref={syllableRef}
      />
    </StyledSyllable>
  );
};

export default Syllable;
