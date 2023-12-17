/* eslint-disable no-unused-vars */
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        {/* <Route
          path="/signup"
          element={
            loggedUser.length ? <Navigate replace to="/" /> : <SignUpPage />
          }
        />
        <Route
          path="/login"
          element={
            loggedUser.length ? <Navigate replace to="/" /> : <LoginPage />
          }
        />*/}
      </Routes>
    </div>
  );
}

export default App;
