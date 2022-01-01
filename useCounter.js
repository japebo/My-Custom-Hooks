import { useState } from "react";

export const useCounter = ( initialState = 10 ) => {
    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter( initialState );
    }

    // const increment = (factor) => {
    //     setState( state + factor );
    // }

    // const decrement = (factor) => {
    //     setState( state - factor);
    // }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
