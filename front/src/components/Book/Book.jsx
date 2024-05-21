import React, { useEffect, useState } from "react";

export default function Book() {
    const [placesAvailable] = useState(12); // Nombre de créneaux disponibles
    const [reservations, setReservations] = useState([]); // Stocke les réservations
    const [alertMessage, setAlertMessage] = useState(""); // Message d'alerte pour l'utilisateur
    const [modalIsOpen, setModalIsOpen] = useState(false); // État du modal
    const [selectedSlot, setSelectedSlot] = useState(null); // Créneau sélectionné

    function generateDates() {
        const slots = [];
        const createSlots = (startHour, endHour) => {
            const baseDate = new Date();
            baseDate.setHours(startHour, 0, 0, 0);
            while (baseDate.getHours() < endHour) {
                slots.push(`${baseDate.getDate()}-${baseDate.getMonth() + 1}-${baseDate.getFullYear()} ${baseDate.getHours()}h${baseDate.getMinutes() < 10 ? '0' : ''}${baseDate.getMinutes()}`);
                baseDate.setMinutes(baseDate.getMinutes() + 30);
            }
        };
        createSlots(12, 14.5); // crénaux de 12:00 à 14:30
        createSlots(19, 22.5); // crénaux de 19:00 à 22:30
        return slots;
    }

    function openModal(index) {
        setSelectedSlot(index);
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
        setAlertMessage("");
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
        const agenda = generateDates(); // génère les crénaux pour les deux plages horaires

        const list = agenda.map((date, index) => (
            <button
                key={index}
                id={`slot-${index}`}
                onClick={() => openModal(index)}
                style={{
                    backgroundColor: reservations.some(res => res.index === index) ? 'black' : 'transparent',
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
            >
                <div
                    className="modal-content"
                    onClick={e => e.stopPropagation()}
                >
                    <div>
                        <h2>Book your slot</h2>
                    </div>
                    <div className="slot-form">
                        <input type="text" id="name" placeholder="name" />

                        <input type="number" id="people" min="1" max={placesAvailable} placeholder="number of people" />
                        <div className="slot-buttons">
                            <button onClick={handleReservationModal} id="reserve-button">Reserve</button>
                            <button onClick={closeModal} id="close-button">Close</button>
                        </div>
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
                    <li key={res.index} id="reserved-slot">
                        Reserved slot {res.index + 1}: {res.name} for {res.people} people
                    </li>
                ))}
            </ul>
        </div>
    );
}