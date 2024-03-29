import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);
    const [prev, setPrev] = useState("patanahi");

    const handleClick = () => {
        setCount(prev => {
            setPrev(prev);
        });
        setCount(count + 1);
    }

    return(
        <>
            <p>Current count: {count}</p>
            <p>Previous count: {prev}</p>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default State;