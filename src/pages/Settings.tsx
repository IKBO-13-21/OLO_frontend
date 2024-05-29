import React, { useContext } from "react";
import { Button } from "antd";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const handleExit = async () => {
    await store.logout();
    navigate("/login");
  };

  return (
    <div
      style={{
        paddingTop: "25px",
      }}
    >
      <Button
        style={{
          display: "block",
          margin: "auto",
        }}
        danger
        onClick={handleExit}
      >
        Выход
      </Button>
    </div>
  );
};

export default Settings;
