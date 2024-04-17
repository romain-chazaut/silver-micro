export default function HomePage() {
    
    return (
        <>
            <div className="header-pages">
                <h1>Welcome</h1>
                <img src="./src/assets/img/logo.svg" alt="logo silver micro" />
            </div>
            
            <div className="connect-buttons">
                <a href="/login" id="sigin">sign in</a>
                <a href="/register">sign up</a>
            </div>
        </>
    )
}