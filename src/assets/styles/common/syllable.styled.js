import styled from "styled-components";

export const StyledSyllable = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 1px solid #a8a9ad;
  position: relative;
  margin: 20px 0;

  &::before {
    content: "";
    position: absolute;
    background-color: transparent;
    opacity: 0.5;
    border-left: 1px dashed black;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &::after {
    content: "";
    position: absolute;
    background-color: transparent;
    opacity: 0.5;
    border-top: 1px dashed black;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  img {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
  }
  .fade-in {
    /* opacity: 0; */
    transition: opacity 0.5s ease-in-out;
  }
  .fade-in.show {
    opacity: 1;
  }

  .circle-draw {
    /* display: block; */
    margin: auto;
    transform: rotate(90deg);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .circle-draw circle {
    fill: none;
    stroke: #4caf50;
    stroke-width: 5;
    stroke-dasharray: 251.2; /* 원의 둘레 */
    stroke-dashoffset: 251.2;
    animation: drawCircle 1s ease-in-out forwards;
  }

  @keyframes drawCircle {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
