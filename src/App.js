import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  Switch가 버전이 바뀌면서 Routes로 바뀜
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Home />} exact />
        <Route path="/signin" component={<Signin />} exact />
      </Routes>
      <Home />
    </Router>
  );
}

export default App;
