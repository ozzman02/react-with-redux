import { useState, useEffect } from 'react';

export default function useCounter(initialCount) {

    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    /*
        If keys and values have identical names you can use just the key to create the object 

        return { count: count, handleClick: handleClick }
        return { count, handleClick }
    */

    return {
        count,
        increment
    }


}