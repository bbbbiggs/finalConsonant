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
`;
