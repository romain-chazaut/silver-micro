import Book from "../components/Book/Book";
import "../assets/css/App.css";

export default function BookPage() {
    
    return (
        <>
            <div className="header-pages">
                <h1>Book your table</h1>
                <img src="./src/assets/img/logo.svg" alt="logo silver micro" />
            </div>
            <Book />
        </>
    )
}