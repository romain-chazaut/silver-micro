import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const ModalReservation = ({ isOpen, onClose }) => {
  // État initial pour le formulaire de réservation
  const [reservation, setReservation] = useState({
    name: '',
    people: 1,
    date: '',
    time: '',
  });

  // Gère les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Réservation soumise:', reservation);
    // Ici, vous pourriez envoyer les données à votre API pour enregistrer la réservation
    onClose(); // Ferme le modal après la soumission
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Réserver une table">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={reservation.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="people">Nombre de personnes:</label>
          <input
            type="number"
            id="people"
            name="people"
            min="1"
            value={reservation.people}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={reservation.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Heure:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={reservation.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Réserver</button>
      </form>
    </Modal>
  );
};

export default ModalReservation;
