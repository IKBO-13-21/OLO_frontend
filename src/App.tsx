import React from "react";
import LoginForm from "./pages/LoginForm/LoginForm";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="registration" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
