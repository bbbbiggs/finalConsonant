import React from "react";
import CircleButton from "./CircleButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledBackButton = styled.div`
  div {
    top: 50px;
    z-index: 1;
  }
`;

const BackButton = () => {
  const nav = useNavigate();
  return (
    <StyledBackButton>
      <CircleButton onClick={() => nav("/")}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>뒤로가기</p>
      </CircleButton>
    </StyledBackButton>
  );
};

export default BackButton;
