import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"one"}>1페이지</Link>
      <br />
      <Link to={"two"}>2페이지</Link>
      <br />
      <Link to={"three"}>3페이지</Link>
    </div>
  );
};

export default Home;
