import React from "react";
import styled from "styled-components";

const StyledStarCircle = styled.div`
  pointer-events: none;
  img {
    position: absolute;
    width: 50px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    transform-origin: center;
    animation: expand-and-fade 1.2s forwards;
  }

  @keyframes expand-and-fade {
    0% {
      transform: translate(-50%, -50%) scale(1); /* 초기 상태 */
      opacity: 1;
    }
    80% {
      transform: translate(-50%, -50%) scale(3); /* 크기 커짐 */
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(3); /* 크기 유지 */
      opacity: 0;
    }
  }
`;

const StarCircle = () => {
  return (
    <StyledStarCircle>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/two/img/starCircle.png`}
        className="starCircle"
        alt=""
      />
    </StyledStarCircle>
  );
};

export default StarCircle;
