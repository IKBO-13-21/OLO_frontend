import { useNavigate } from "react-router-dom";

export default function useRedirectAuth() {
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    navigate("/profile");
  }
}
