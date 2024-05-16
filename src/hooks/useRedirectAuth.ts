import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function useRedirectAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, []);
}
