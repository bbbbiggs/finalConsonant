import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import One from "./components/One";
import Two from "./components/Two";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
      </Routes>
    </div>
  );
}

export default App;
