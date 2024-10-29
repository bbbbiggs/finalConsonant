import React from "react";
import styled from "styled-components";

const StyledDragItemsWrapper = styled.div`
  background-color: antiquewhite;
  width: 100%;
  img {
    width: 78px;
    border: 1px solid black;
    margin-right: 10px;
    /* display: block; */
  }
`;

const DragItemsWrapper = (data) => {
  return <StyledDragItemsWrapper>{data.children}</StyledDragItemsWrapper>;
};

export default DragItemsWrapper;
