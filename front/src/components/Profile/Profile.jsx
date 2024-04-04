import React, { useState } from 'react';
import ModalReservation from './ModalReservation';

function Profile() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <h1>Profil</h1>
            {/* Contenu du profil ici */}
            <button onClick={() => setShowModal(true)}>Réserver une table</button>
            {showModal && <ModalReservation isOpen={showModal} onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default Profile;
