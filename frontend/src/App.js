import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<NavBar />} path="/">
            <Route element={<HomePage />} index />
            <Route element={<LoginPage />} path="/login" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
