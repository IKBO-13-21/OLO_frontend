import { Button } from "antd";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    const checkStoreToken = () => {
        return localStorage.getItem("token") != null;
    }

    if(!checkStoreToken()) {
        navigate("/login");
    }

    const handleLogout = () => {
        if (checkStoreToken()) {
            localStorage.removeItem("token");
            navigate("/login");
        }
    }

    return (
        <div>
            Профиль
            <Button onClick={handleLogout } danger> Выход</Button>
        </div>
    );
};

export default Profile;
