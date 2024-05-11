import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const showTopBar = !["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {showTopBar && <TopBar organisationId="12345" />}

      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="" element={<Header />} />
        <Route exact path="/create-resume" element={<Body />} />
      </Routes>
    </>
  );
}

export default App;
