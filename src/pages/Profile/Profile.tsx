import React, { useEffect } from "react";
import { Button } from "antd";

const Profile = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div>
      Профиль
      <Button danger> Выход</Button>
    </div>
  );
};

export default Profile;
