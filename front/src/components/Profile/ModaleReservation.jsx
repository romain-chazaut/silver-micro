import React from 'react';
import Modal from '../common/Modal';

const ModalReservation = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Réserver une table">
      {/* Formulaire de réservation ici */}
      <p>Formulaire de réservation à implémenter ici.</p>
    </Modal>
  );
};

export default ModalReservation;
