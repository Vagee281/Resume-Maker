import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <TopBar organisationId="12345" /> */}

        <Routes>
        <Route exact path="/login" element={<Login/>}/>
          <Route exact path="" element={<Header />} />
          <Route exact path="/create-resume" element={<Body />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
