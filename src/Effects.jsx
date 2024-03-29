// Implement a CountdownTimer component that implements useState() and useEffect() in conjunction with setInterval to handle the timer. Make sure you use the useEffect() hook to call clearTimeout() when the component is destroyed.

import { useEffect, useState } from "react";

const Effects = () => {

    const [count, setCount] = useState(0);
    const [paused, setPaused] = useState(true);

    const counter = () => {
        if (paused) {
            return;
        }

        setCount(c => c + 1);
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            counter();
        }, 300);
        paused && clearTimeout(timer);
    });

    return(
        <>
            <p>{count}</p>
            <button onClick={() => {
                setPaused(p => !p);
                }}>toggle</button>
        </>
    )
}

export default Effects;