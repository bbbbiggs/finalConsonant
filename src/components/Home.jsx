import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"one"}>낱말완성</Link>
      <br />
      <Link to={"two"}>낱말쓰기</Link>
    </div>
  );
};

export default Home;
