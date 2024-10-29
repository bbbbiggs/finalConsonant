import React from "react";
import styled from "styled-components";

const StyledDragItemsWrapper = styled.div`
  background-color: antiquewhite;
  img {
    width: 50px;
    border: 1px solid black;
    margin-right: 10px;
    /* display: block; */
  }
`;

const DragItemsWrapper = (data) => {
  return <StyledDragItemsWrapper>{data.children}</StyledDragItemsWrapper>;
};

export default DragItemsWrapper;
