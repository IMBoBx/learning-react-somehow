// Create CountContext and CountProvider that uses { count, setCount } as its values. This will allow the count and setCount function to be passed to any of its {children} in the tree. Create 2 components Count and CountButton that can each call useContext(CountContext) to update the count and display the current count value.

import React, { createContext, useContext, useState } from "react"

const CountContext = createContext();

const CountProvider = (props) => {
    const [count, setCount] = useState(0);

    return(
        <CountContext.Provider value={{ count, setCount }}>
            {props.children}
        </CountContext.Provider>
    )
}

const Count = () => {
    const {count} = useContext(CountContext);
    return <p>{count}</p>
}

const CountButton = () => {
    const {setCount} = useContext(CountContext);
    return <button onClick={() => setCount(c => c + 1)}>+</button>
}

const Context = () => {
    return (
        <CountProvider>
            <Count />
            <CountButton />
        </CountProvider>
        )
}

export default Context;