function Update() {
    const handleSubmitSend = async (event) => {
        event.preventDefault();
    
        const firstname = event.target.elements.firstname.value;
        const lastname = event.target.elements.lastname.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const passwordConfirm = event.target.elements.passwordConfirm.value;
    
        if (password !== passwordConfirm) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3000/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    firstname: firstname,
                    lastname: lastname,
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
            console.error("Erreur lors de la mise à jour :", error);
        }
    };

    return (

        <div className='connect-form'>

            <h2>Edit your informations</h2>

            <form onSubmit={handleSubmitSend}>
                
                {/* <label htmlFor="firstname">Firstname</label> */}
                <input type="text" id="firstname" name="firstname" placeholder='firstname' />

                {/* <label htmlFor="lastname">Lastname</label> */}
                <input type="text" id="lastname" name="lastname" placeholder='lastname' />

                {/* <label htmlFor="email">Email</label> */}
                <input type="email" id="email" name="email" placeholder='e-mail'/>

                {/* <label htmlFor="password">Password</label> */}
                <input type="password" id="password" name="password" placeholder='password' />

                {/* <label htmlFor="password-confirm">Password confirmation</label> */}
                <input type="password" id="passwordConfirm" name="password-confirm" placeholder='confirm password' />

                <button type="submit">Update</button>
            </form>

        </div>
    )
}

export default Update;