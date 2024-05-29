import React from "react";
import LoginForm from "./pages/LoginForm/LoginForm";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./pages/components/PrivateRoute";
import CustomMenu from "./pages/components/CustomMenu";
import States from "./pages/States/States";
import Traning from "./pages/Traning";
import Recipe from "./pages/Recipe";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <CustomMenu />
      <Routes>
        <Route index path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/states" element={<States />} />
          <Route path="/traning" element={<Traning />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
