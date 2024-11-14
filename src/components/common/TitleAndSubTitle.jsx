import React from "react";
import styled from "styled-components";

const StyledTitleAndSubTitle = styled.div`
  padding-top: 50px;
  .Wrapper {
    background-color: #f57a79;
    box-sizing: border-box;
    width: 300px;
    /* height: 60px; */
    line-height: 60px;
    border: 3px solid #fffbfb;
    border-top-right-radius: 106px;
    border-bottom-right-radius: 106px;
    box-shadow: 0px 4px 4px 0px #00000040;

    .topText {
      font-family: Roboto;
      font-size: 25px;
      font-weight: 700;
      text-align: center;
      color: #fffbfb;
    }
  }
`;

const TitleAndSubTitle = () => {
  return (
    <StyledTitleAndSubTitle>
      <div className="Wrapper">
        <p className="topText">기초국어 ㅣ 튼튼2</p>
      </div>
    </StyledTitleAndSubTitle>
  );
};

export default TitleAndSubTitle;
