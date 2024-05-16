import React, { useContext, useEffect } from "react";
import LoginForm from "./pages/LoginForm/LoginForm";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="registration" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
