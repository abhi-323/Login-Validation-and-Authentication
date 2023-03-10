import React, { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import PrivateRoute from "./utils/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom, authTokenAtom } from "./recoil/recoil";
import jwtDecode from "jwt-decode";

function App() {
  let [user, setUser] = useRecoilState(userAtom);
  let [authToken, setAuthToken] = useRecoilState(authTokenAtom);

  useEffect(() => {
    if (authToken != null) {
      setUser(jwtDecode(authToken.access));
    }
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<NavBar />} path="/">
            <Route element={<HomePage />} index />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignupPage />} path="/signup" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
