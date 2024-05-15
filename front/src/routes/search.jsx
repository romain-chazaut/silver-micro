import Search from "../components/Search/Search";
import "../assets/css/App.css";

export default function SearchPage() {
    
    return (
        <>
            <div className="header-pages">
                <h1>Explore</h1>
                <img src="./src/assets/img/logo.svg" alt="logo silver micro" />
            </div>
            <Search />
        </>
    )
}