import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledNextButton = styled.div`
  background-color: #f66934;
  width: 150px;
  height: 150px;
  border: 5px solid #ffffff;
  box-shadow: 5px 5px 4px 0px #00000040;
  border-radius: 50%;
  box-sizing: border-box;

  position: absolute;
  right: 41px;
  bottom: 43px;
  z-index: 3;

  display: grid;
  align-content: center;
  justify-items: center;
  cursor: pointer;

  svg {
    color: white;
    width: 50px;
    height: 60px;
  }
  p {
    font-family: Roboto;
    font-size: 19px;
    font-weight: 700;
    color: white;
  }
`;
const NextButton = (data) => {
  return (
    <StyledNextButton onClick={data.onclick}>
      <FontAwesomeIcon icon={faForward} />
      <p>다음으로</p>
    </StyledNextButton>
  );
};

export default NextButton;
