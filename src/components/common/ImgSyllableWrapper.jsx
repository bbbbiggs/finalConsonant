import React from "react";
import styled from "styled-components";

const StyledImgSyllableWrapper = styled.div`
  /* background-color: yellow; */
  display: inline-block;
  text-align: center;
  margin-right: 10px;
  > img {
    width: 150px;
  }
`;

const ImgSyllableWrapper = (data) => {
  return <StyledImgSyllableWrapper>{data.children}</StyledImgSyllableWrapper>;
};

export default ImgSyllableWrapper;
