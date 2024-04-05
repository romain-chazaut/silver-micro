import '../../assets/css/login.css'

function Login() {
    const handleSubmitSend = async (event) => {
        event.preventDefault();
    
        const firstname = event.target.elements.firstname.value;
        const lastname = event.target.elements.lastname.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const passwordConfirm = event.target.elements.passwordConfirm.value;
    
        const role = ['USER']; // Définir le rôle par défaut
        
        const today = new Date();
        const created_at = today.toISOString().split('T')[0];
    
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                    role: role,
                    created_at: created_at,
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
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmitSend}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login