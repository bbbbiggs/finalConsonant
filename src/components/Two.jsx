import React from "react";
import { StyledTwo } from "../assets/styles/two/two.styled";

const Two = () => {
  return (
    <StyledTwo>
      <hr />
      <p>받침을 살펴보며 낱말을 읽어 봅시다.</p>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/two/backgroundImg.png`}
        alt=""
        draggable={false}
      />
      <p>위에서 다음 받침이 들어간 낱말을 드래그 하세요.</p>
      <div className="dragArea1">'ㄱ'받침</div>
    </StyledTwo>
  );
};

export default Two;
