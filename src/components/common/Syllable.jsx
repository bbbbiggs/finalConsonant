import React from "react";
import styled from "styled-components";

const StyledSyllable = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 1px solid #a8a9ad;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-color: transparent;
    opacity: 0.5;
    border-left: 1px dashed black;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &::after {
    content: "";
    position: absolute;
    background-color: transparent;
    opacity: 0.5;
    border-top: 1px dashed black;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  img {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .fade-in {
    /* opacity: 0; */
    transition: opacity 0.5s ease-in-out;
  }
  .fade-in.show {
    opacity: 1;
  }
`;

const Syllable = (data) => {
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
      />
    </StyledSyllable>
  );
};

export default Syllable;
