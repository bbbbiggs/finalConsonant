import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledBackButton = styled.div`
  background-color: #7a7dff;
  width: 150px;
  height: 150px;
  border: 5px solid #ffffff;
  box-shadow: 5px 5px 4px 0px #00000040;
  border-radius: 50%;

  position: absolute;
  right: 100px;

  display: grid;
  align-content: center;
  justify-items: center;
  cursor: pointer;

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

const BackButton = () => {
  return (
    <StyledBackButton>
      <FontAwesomeIcon icon={faArrowLeft} />
      <p>뒤로가기</p>
    </StyledBackButton>
  );
};

export default BackButton;
