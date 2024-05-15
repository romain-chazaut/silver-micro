import React, { useState, useEffect } from 'react';
import lecaillerie from "../../assets/img/restaurant/lecaillerie.png";
import bistrotMimi from "../../assets/img/restaurant/bistrotMimi.png";
import laMercerie from "../../assets/img/restaurant/laMercerie.png";
import laOla from "../../assets/img/restaurant/laOla.png";
import limmat from "../../assets/img/restaurant/limmat.png";
import livingston from "../../assets/img/restaurant/livingston.png";
import ripaille from "../../assets/img/restaurant/ripaille.png";
import romy from "../../assets/img/restaurant/romy.png";

let images = {
    'lecaillerie.png': lecaillerie,
    'bistrotMimi.png': bistrotMimi,
    'laMercerie.png': laMercerie,
    'laOla.png': laOla,
    'limmat.png': limmat,
    'livingston.png': livingston,
    'ripaille.png': ripaille,
    'romy.png': romy
}

function Search() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/search')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des restaurants');
                }
                return response.json();
            })
            .then(data => {
                setRestaurants(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des restaurants:', error);
            });
    }, []);

    return (
        <>
            <div className="search-wrapper">
                <h2>What are you looking for?</h2>
                <form action="">
                    <input type="text" id="search" name="search" placeholder='Search...' />
                    <div className="results"></div>
                    <div className="search-buttons">
                        <button id="book-button" type="submit">Book</button>
                        <button id="view-button" type="submit">View more</button>
                    </div>
                </form>
            </div>
            <div className="restaurants">
                <ul>
                    {restaurants.map(restaurant => (
                        <li key={restaurant.id}>
                            <h4>{restaurant.name}</h4>
                            <p>Location: {restaurant.location}</p>
                            <p>Number of Places: {restaurant.nb_places}</p>
                            {images != undefined &&
                                <img src={images[restaurant.image]} alt={restaurant.name} />
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Search;
