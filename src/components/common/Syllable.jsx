import React from "react";
import { StyledSyllable } from "../../assets/styles/common/syllable.styled";

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
