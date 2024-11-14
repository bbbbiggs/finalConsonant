import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Two from "./components/Two";
import OneRenewal from "./components/OneRenewal";
import One from "./components/dump/One";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/newone" element={<OneRenewal />} />
        <Route path="/two" element={<Two />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
