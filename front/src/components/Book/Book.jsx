// function generateDates()
// function generateHours()
// function calculateAvailabalities()
import { useState } from "react";

export default function Book() {
    const [placesAvailable, setPlacesAvailable] = useState(20);
    const currentDate = new Date();
    currentDate.setHours(12);
    currentDate.setMinutes(0);

    const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()} ${currentDate.getHours()} h`;

    // Au fetch on recois data
    // new date(data.dateReservation)

    // const displayDate = currentDate.toLocaleString();

    
    function DateRender() {
        let agenda = [];
        const displayDate = currentDate.toLocaleString();
        for(let i = 0; i < placesAvailable; i++) {
            agenda.push(formattedDate);
        }
    
        const list = agenda.map(date =>
            <button>{date}</button>
        );

        return(
            <div>
                {list}
            </div>
        )
    }

    return (
        <div>
            <DateRender/>
        </div>
    );
}