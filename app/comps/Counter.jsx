'use client'
import {useState} from 'react';

export default function Counter(){
    const [count, setCount] = useState(0)

    function addCount(){
        setCount((prevState) => prevState + 1)
    }

    function removeCount(){
        setCount((prevState) => Math.max(0, prevState - 1))
    }

    function clearCount(){
        setCount(0)
    }

    return (
        <div>
            <h4>Count: {count}</h4>
            <button onClick={addCount}>Add Count</button>
            <button onClick={removeCount}>Remove Count</button>
            <button onClick={clearCount}>Clear Count</button>
        </div>
    )
}