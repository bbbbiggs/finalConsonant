import React from "react";
import { StyledImgSyllableWrapper } from "../../assets/styles/common/imgSyllableWrapper.styled";

const ImgSyllableWrapper = (data) => {
  return (
    <StyledImgSyllableWrapper
      $show={data.show}
      // $disappear={data.disappear}
      className={data.shake === "shake" ? "shake" : ""}
    >
      {data.children}
    </StyledImgSyllableWrapper>
  );
};

export default ImgSyllableWrapper;
