import '../../assets/css/login.css';

function Login() {
    const handleSubmitLogin = async (event) => {
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
                const data = await response.json();
                alert(data.message);
                // Ici, vous pouvez rediriger l'utilisateur vers une autre page en cas de succès
                window.location.href = '/home';
            } else {
                // Gestion des réponses HTTP autres que 200 OK
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };
    
    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmitLogin}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
