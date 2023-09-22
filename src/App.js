import React from "react";
import SignUp from "./components/Auth/Sign-up";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import ChatUi from "./components/Chat-box/ChatUi";

function App() {
  return (
    <div className=" flex justify-center items-center bg-gradient-to-r from-blue-500  to-green-400 h-full">
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chatapp" element={<ChatUi />}></Route>
      </Routes>
    </div>
  );
}

export default App;
