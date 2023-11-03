// import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "../components/NavBar";
function App() {
  const [reload, setReload] = useState(false);
  return (
    <>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
