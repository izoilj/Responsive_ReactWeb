import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  Switch가 버전이 바뀌면서 Routes로 바뀜
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";

function App() {
  return (
    <Router>
      <Routes>
        {/*
        <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        </Router>  */}
        {/* 위에꺼가 기존 버전 아래꺼는 새로운 버전. 
        component도 element로 바뀌고, 안에 페이지를 {<페이지이름 />} 으로 불러와야함 */}

        <Route path="/" element={<Home />} exact={true} />
        <Route path="/signin" element={<SigninPage />} exact={true} />
      </Routes>
    </Router>
  );
}

export default App;
