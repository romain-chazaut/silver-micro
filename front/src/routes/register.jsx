import Register from "../components/Register/Register";
import "../assets/css/App.css";

export default function RegisterPage() {
    
    return (
        <>
            <div className="header-connect">
            <img src="./src/assets/img/logo.png" alt="logo silver micro" />
                <p>Elevate your dining experience here</p>
            </div>
            <Register />
        </>
    )
}