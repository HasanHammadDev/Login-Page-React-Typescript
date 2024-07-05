import { Button } from "react-bootstrap";
import fetchProfile from "../Fetch/fetchProfile";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../Fetch/Logout";

const Profile: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        async function getProfile() {
            const response = await fetchProfile();
            if (!response.success) {
                navigate('/');
            }
        }
        getProfile();
    }, [navigate]);

    const handleLogout = async () => {
        await Logout();
        navigate('/');
    }

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="font-semibold m-1">Welcome To Your Profile!</h1>
            <Button className="m-1" onClick={handleLogout}>Logout</Button>
        </div>
    );
}

export default Profile;