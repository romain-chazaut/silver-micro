import Update from "../components/Update/Update";
import "../assets/css/App.css";

export default function ProfilePage() {
    
    return (
        <>
            <div className="header-pages">
                <h1>Update your profile</h1>
                <img src="./src/assets/img/logo.svg" alt="logo silver micro" />
            </div>
            <Update />
        </>
    )
}