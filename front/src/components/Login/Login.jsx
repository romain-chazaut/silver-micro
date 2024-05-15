function Login() {
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
            }
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error);
        }
    };
    
    return (
        <div className='connect-form'>
            <h1>Login</h1>

            <form onSubmit={handleSubmitSend}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>

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

export default Login