import '../../assets/css/login.css'

function Login() {
    const handleSubmitSend = async (event) => {
        event.preventDefault();
    
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
    
        const role = ['USER']; // Définir le rôle par défaut
    
        const today = new Date();
        const created_at = today.toISOString().split('T')[0];

    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.');
            return;
        }
    

    
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST', // Changement ici
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
        
            if (response.ok) {
                event.target.reset(); // Réinitialise les champs du formulaire à leur valeur initiale (vide)
            }
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error("Erreur lors de la connexion:", error);
        }
    };
    
    
    return (
        <div className='connect-form'>
            <h1>Login</h1>

            <form onSubmit={handleSubmitSend}>
                
                {/* <label htmlFor="email">Email</label> */}
                <input type="email" id="email" name="email" placeholder='e-mail'/>

                {/* <label htmlFor="password">Password</label> */}
                <input type="password" id="password" name="password" placeholder='password' />

                <button type="submit">Sign in</button>
            </form>

            <div className='connect-question'>
                <p>You don’t have an account ?</p>
                <a href="/register">Sign up</a>
            </div>

        </div>
    )
}

export default Login