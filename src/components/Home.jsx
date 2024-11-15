import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHome = styled.div`
  a {
    text-decoration: none;
  }
  li {
    margin-bottom: 10px;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <br />
      <ol>
        <li>
          <Link to={"one"}>낱말완성</Link>
        </li>
        <li>
          <Link to={"newone"}>낱말완성리뉴얼</Link>
        </li>
        <li>
          <Link to={"two"}>낱말 드래그</Link>
        </li>
      </ol>
    </StyledHome>
  );
};

export default Home;
