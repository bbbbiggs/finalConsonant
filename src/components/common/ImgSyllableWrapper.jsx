import React from "react";
import styled from "styled-components";

const StyledImgSyllableWrapper = styled.div`
  /* background-color: yellow; */
  display: inline-block;
  text-align: center;
  margin-right: 10px;
  transition: opacity 0.5s ease-in-out;

  opacity: ${(props) => {
    if (props.$show === "show") return "1";
    //   {
    //   console.log(1123123, props.$show);
    // }
    else {
      return "0";
    }
  }};

  > img {
    width: 150px;
  }
  .wordWrapper {
    display: flex;
  }
`;

const ImgSyllableWrapper = (data) => {
  return (
    <StyledImgSyllableWrapper $show={data.show}>
      {data.children}
    </StyledImgSyllableWrapper>
  );
};

export default ImgSyllableWrapper;
