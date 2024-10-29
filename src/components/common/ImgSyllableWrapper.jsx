import React from "react";
import { StyledImgSyllableWrapper } from "../../assets/styles/common/imgSyllableWrapper.styled";

const ImgSyllableWrapper = (data) => {
  return (
    <StyledImgSyllableWrapper $show={data.show}>
      {data.children}
    </StyledImgSyllableWrapper>
  );
};

export default ImgSyllableWrapper;
