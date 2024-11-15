import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledBackButton = styled.div`
  background-color: #7a7dff;
  width: 150px;
  height: 150px;
  border: 5px solid #ffffff;
  box-shadow: 5px 5px 4px 0px #00000040;
  border-radius: 50%;
  box-sizing: border-box;

  position: absolute;
  right: 41px;
  top: 50px;
  z-index: 1;

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

const BackButton = () => {
  const nav = useNavigate();
  return (
    <StyledBackButton onClick={() => nav("/")}>
      <FontAwesomeIcon icon={faHouse} />
      <p>홈</p>
    </StyledBackButton>
  );
};

export default BackButton;
