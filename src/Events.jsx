// Implement a text input that updates the input value and logs the event target.
import React, { useState } from 'react';



const Events = () => {

    const [value, updateValue] = useState('');

    const eventHandler = (e) => {
        updateValue(e.target.value);
        console.log(value)
    }

    return (
        <div>
            <input type="text" onChange={eventHandler}/>
            <p id='aaa'>{value}</p>
        </div>
    );
}

export default Events;