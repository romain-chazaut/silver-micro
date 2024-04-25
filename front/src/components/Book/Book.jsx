import { useState } from "react";

export default function Book() {
    const [placesAvailable, setPlacesAvailable] = useState(20);
    const currentDate = new Date();
    currentDate.setHours(12);
    currentDate.setMinutes(0);
    
    const newDate = new Date(currentDate); // Créer une nouvelle instance de date
    console.log(newDate);
    newDate.setMinutes(newDate.getMinutes() + 30);

    console.log(newDate);
    
    // Au fetch on recoit data
    // new date(data.dateReservation)

    // const displayDate = currentDate.toLocaleString();

    
    function DateRender() {
        let agenda = [];
        
        let date1 = new Date(currentDate);
        
        for(let i = 0; i < placesAvailable; i++) {
            date1.setMinutes(date1.getMinutes() + 30);
            const formattedDate = `${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()} ${date1.getHours()} h-${date1.getMinutes()}`;
            console.log(formattedDate,'coucoiu');
            // si ici je fais 12h + 30 min 
            agenda.push(formattedDate);

        }
    
        const list = agenda.map((date,index) =>
            <button id={`plop-${index}`}>{date}</button>
        );

        return(
            <div id="availabilities">
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