import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const checkStoreToken = () => {
        return localStorage.getItem("token") != null;
    }

    if(!checkStoreToken()) {
        navigate("/login");
    } else {
        navigate("/profile")
    }

    return (
        <div>
        </div>
    );
};

export default Home;
