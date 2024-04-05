import React, { useState, useEffect } from 'react';
import ModalReservation from './ModalReservation';

function Profile() {
    const [showModal, setShowModal] = useState(false);
    // Simulons un état pour les informations de l'utilisateur
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        // Ajoutez d'autres champs au besoin
    });

    // Simulez la récupération des données de l'utilisateur
    useEffect(() => {
        // Ici, vous feriez une requête à une API pour récupérer les informations de l'utilisateur
        // Pour cet exemple, nous allons simplement simuler ces données
        const fetchedUserInfo = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            // Complétez avec d'autres champs au besoin
        };
        setUserInfo(fetchedUserInfo);
    }, []);

    // Gère la mise à jour des champs du formulaire
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    // Gère la soumission du formulaire pour mettre à jour les informations de l'utilisateur
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Mise à jour des informations de l\'utilisateur:', userInfo);
        // Ici, vous feriez une requête à une API pour mettre à jour les informations
        alert('Informations mises à jour avec succès!');
    };

    return (
        <div>
            <h1>Profil</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom :</label>
                    <input
                        type="text"
                        name="name"
                        value={userInfo.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Email :</label>
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {/* Ajoutez d'autres champs au besoin */}
                <button type="submit">Mettre à jour</button>
            </form>
            <button onClick={() => setShowModal(true)}>Réserver une table</button>
            {showModal && <ModalReservation isOpen={showModal} onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default Profile;
