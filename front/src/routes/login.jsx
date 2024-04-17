import Login from "../components/Login/Login"
import "../assets/css/App.css";

export default function LoginPage() {
    
    return (
        <>
            <div className="header-connect">
                <img src="./src/assets/img/logo.svg" alt="logo silver micro" />
                <p>Elevate your dining experience here.</p>
            </div>
            <Login />
        </>
    )
}