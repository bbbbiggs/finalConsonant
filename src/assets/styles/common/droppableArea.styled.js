import styled from "styled-components";

export const StyledDroppableArea = styled.div`
  position: relative;
  width: 253px;
  .boardImg {
    border: 5px double transparent;
  }
  .boardTitle {
    position: absolute;
    top: 33px;
    left: 46%;
    transform: translateX(-50%);
    font-size: 25px;
  }
  .wordListWrapper {
    /* width: 140px; */
    /* background-color: yellow; */
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  @keyframes shake {
    0% {
      transform: rotate(0deg) translateX(0);
    }
    25% {
      transform: rotate(-5deg) translateX(-5px);
    }
    50% {
      transform: rotate(5deg) translateX(5px);
    }
    75% {
      transform: rotate(-5deg) translateX(-5px);
    }
    100% {
      transform: rotate(0deg) translateX(0);
    }
  }

  &.lightShake {
    animation: shake 0.5s ease-in-out;
  }
`;
