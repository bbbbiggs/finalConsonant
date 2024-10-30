import React from "react";
import styled from "styled-components";

const StyledDragItemsWrapper = styled.div`
  background-color: #d4f6ff;
  width: 90%;
  margin: auto;

  display: flex;
  justify-content: center;
  gap: 10px;

  img {
    width: 78px;
    border: 1px solid black;
  }
`;

const DragItemsWrapper = (data) => {
  return <StyledDragItemsWrapper>{data.children}</StyledDragItemsWrapper>;
};

export default DragItemsWrapper;
