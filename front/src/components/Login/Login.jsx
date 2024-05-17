import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Login() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmitSend = async (event) => {
        event.preventDefault();
    
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
    
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                event.target.reset();
                setLoggedIn(true);
            } else {
                const data = await response.json();
                console.log(data.message);
            }
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };

    if (loggedIn) {
        return <Navigate to="/search" />;
    }

    return (
        <div className='connect-form'>
            <h1>Login</h1>

            <form onSubmit={handleSubmitSend}>

                <input type="email" id="email" name="email" placeholder="email"/>

                {/* <label htmlFor="password">Password</label> */}
                <input type="password" id="password" name="password" placeholder='password' />

                <button type="submit">Login</button>
            </form>

            <div className='connect-question'>
                <p>You don’t have an account ?</p>
                <a href="/register">Sign up</a>
            </div>

        </div>
    )
}

export default Login;
