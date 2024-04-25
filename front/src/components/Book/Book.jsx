import { PureComponent, useState } from "react";

export default function Book() {
    const [placesAvailable, setPlacesAvailable] = useState(20);  // Nombre de créneaux disponibles
    const [reservations, setReservations] = useState([]);  // Stocke les réservations
    const [alertMessage, setAlertMessage] = useState("");  // Message d'alerte pour l'utilisateur

    function generateDates(baseDate, count, increment) {
        const dates = [];
        for (let i = 0; i < count; i++) {
            const date = new Date(baseDate.getTime() + i * increment * 60000);
            dates.push(`${date.getDate()}-0${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}h${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`);
        }
        return dates;
    }

    function handleReservation(index) {
        if (reservations.some(res => res.index === index)) {
            setAlertMessage("This slot is already booked.");
            return;
        }

        let name = prompt("Enter your name for the reservation:");
        console.log(typeof (name));
        name = toString(name);
        console.log(typeof (name));
        if (typeof (name) !== String || name === "") {
            setAlertMessage("Please enter a valid name.");
        }
        let people = prompt("Enter the number of people (numbers only):", "");
        console.log(typeof(people));
        people = parseInt(people);
        console.log(typeof(people));
        if (people > placesAvailable) {
            setAlertMessage(`The maximum number of people for this slot is ${placesAvailable}.`);
            return;
        }
        if (name && people && !isNaN(people)) {
            const newReservations = [...reservations, { index, name: String(name), people: parseInt(people, 10) }];
            setReservations(newReservations);
            setAlertMessage("");
        } else {
            setAlertMessage("Please enter valid information.");
        }
    }

    function DateRender() {
        const baseDate = new Date();
        baseDate.setHours(11, 0, 0, 0);
        const agenda = generateDates(baseDate, placesAvailable, 20);

        const list = agenda.map((date, index) => (
            <button key={index} id={`slot-${index}`} onClick={() => handleReservation(index)}>
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

    return (
        <div>
            <DateRender />
            <ul>
                {reservations.map(res => (
                    <li key={res.index}>Reserved slot {res.index + 1}: {res.name} for {res.people} people</li>
                ))}
            </ul>
        </div>
    );
}
