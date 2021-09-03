import React, { useState, useEffect } from 'react';

function RandomBeer() {

    const [beer, setBeer] = useState([])

    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers/random")
        .then((res) => res.json())
        .then((data) => {
            setBeer(data)
            console.log(data)
        })
    }, [])

    return (
        <div></div>
    )
}

export default RandomBeer;