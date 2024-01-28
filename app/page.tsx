"use client"

import React, { useState, useEffect } from 'react';

export default function HearthstoneCard() {
    const [cardName, setCardName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/VAN_CS2_221';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '609812722cmshc530c4bfaae0383p1ec266jsnfaa60a0bd882',
                    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();

                // Assuming data is an array with a single object
                const card = data[0];
                console.log(card)
                // Extract the name from the card object
                const { img } = card;

                // Set the cardName state with the extracted name
                setCardName(img);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className='bg-black text-sm'>
            <h1 className="text-3xl font-bold underline">
            Hello world!
            </h1>
            <h1>{cardName}</h1>
            <img src={cardName}></img>
        </div>
    );
}
