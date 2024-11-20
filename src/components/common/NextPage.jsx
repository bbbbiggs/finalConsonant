import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledNextButton = styled.div`
  background-color: rgb(223 168 0);
  width: 150px;
  height: 150px;
  border: 5px solid #ffffff;
  box-shadow: 5px 5px 4px 0px #00000040;
  border-radius: 50%;

  position: absolute;
  right: 41px;
  bottom: 43px;

  display: grid;
  align-content: center;
  justify-items: center;
  cursor: pointer;

  z-index: 3;

  svg {
    color: white;
    width: 72px;
    height: 60px;
  }
  p {
    font-family: Roboto;
    font-size: 19px;
    font-weight: 700;
    color: white;
  }
`;

const NextPage = (data) => {
  return (
    <StyledNextButton onClick={data.onclick}>
      <FontAwesomeIcon icon={faCaretRight} />
      <p>다음페이지</p>
    </StyledNextButton>
  );
};

export default NextPage;
