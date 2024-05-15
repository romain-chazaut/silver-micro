import React, { useEffect, useState } from "react";

export default function Book() {
    const [placesAvailable] = useState(20); // Nombre de créneaux disponibles
    const [reservations, setReservations] = useState([]); // Stocke les réservations
    const [alertMessage, setAlertMessage] = useState(""); // Message d'alerte pour l'utilisateur
    const [modalIsOpen, setModalIsOpen] = useState(false); // État du modal
    const [selectedSlot, setSelectedSlot] = useState(null); // Créneau sélectionné

    function generateDates(baseDate, count, increment) {
        const dates = [];
        for (let i = 0; i < count; i++) {
            const date = new Date(baseDate.getTime() + i * increment * 60000);
            dates.push(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}h${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`);
        }
        return dates;
    }

    function openModal(index) {
        setSelectedSlot(index);
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
        setAlertMessage(""); // Clear any previous alert messages
    }

    function handleReservationModal() {
        if (reservations.some(res => res.index === selectedSlot)) {
            setAlertMessage("This slot is already booked.");
            return;
        }

        let name = document.getElementById("name").value;
        let people = parseInt(document.getElementById("people").value, 10);

        if (!name || people > placesAvailable || isNaN(people) || people <= 0) {
            setAlertMessage("Please enter valid information.");
            return;
        }

        const newReservations = [...reservations, { index: selectedSlot, name, people }];
        setReservations(newReservations);
        closeModal();
    }

    useEffect(() => {
        console.log(reservations, 'reservations');
    }, [reservations]);

    function DateRender() {
        const baseDate = new Date();
        baseDate.setHours(11, 0, 0, 0); // Assuming reservations start at 11:00 AM
        const agenda = generateDates(baseDate, placesAvailable, 20); // Generate 20-minute increments

        const list = agenda.map((date, index) => (
            <button
                key={index}
                id={`slot-${index}`}
                onClick={() => openModal(index)}
                style={{
                    backgroundColor: reservations.some(res => res.index === index) ? 'grey' : 'white',
                    pointerEvents: reservations.some(res => res.index === index) ? 'none' : 'auto',
                }}
            >
                {date}
            </button>
        ));

        return (
            <div id="availabilities">
                {list}
                {alertMessage && <p style={{ color: 'red' }}>{alertMessage}</p>}
            </div>
        );
    }

    function renderModal() {
        return (
            <div
                className={`modal ${modalIsOpen ? 'show' : ''}`}
                onClick={closeModal}
                style={modalStyles.modal}
            >
                <div
                    className="modal-content"
                    onClick={e => e.stopPropagation()}
                    style={modalStyles.modalContent}
                >
                <div>

                    <h2>Reserve Slot</h2>
                </div>
                <div>

                    <label>
                        Name:
                        <input type="text" id="name" />
                    </label>
                    <label>
                        Number of People:
                        <input type="number" id="people" min="1" max={placesAvailable} />
                    </label>
                </div>
                <div>

                    <button onClick={handleReservationModal}>Reserve</button>
                    <button onClick={closeModal}>Close</button>
                </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <DateRender />
            {modalIsOpen && renderModal()}
            <ul>
                {reservations.map(res => (
                    <li key={res.index}>
                        Reserved slot {res.index + 1}: {res.name} for {res.people} people
                    </li>
                ))}
            </ul>
        </div>
    );
}

const modalStyles = {
    modal: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        visibility: 'visible',
        opacity: 1,
        transition: 'visibility 0s, opacity 0.5s linear',
    },
    modalContent: {
        gap: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: '40vh',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        margintop: '10px',
    },
};
