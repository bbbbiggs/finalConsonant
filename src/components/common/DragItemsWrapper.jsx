import React from "react";
import styled from "styled-components";

const StyledDragItemsWrapper = styled.div`
  /* background-color: #d4f6ff; */
  width: 100%;
  margin: auto;

  display: flex;
  justify-content: center;
  gap: 10px;

  img {
    width: 60px;
    border: 2px solid rgb(229, 229, 229);
    border-radius: 10px;
    cursor: grab;
    box-shadow: var(
      --m3-elevation-light-3-box-shadow,
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15)
    );
  }
  img:active {
    cursor: grabbing;
  }
`;

const DragItemsWrapper = (data) => {
  return <StyledDragItemsWrapper>{data.children}</StyledDragItemsWrapper>;
};

export default DragItemsWrapper;
