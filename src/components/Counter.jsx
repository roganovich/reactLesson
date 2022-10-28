import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    function upCounter(){
        setCounter(counter + 1);
        console.log(counter);
    }

    function downCounter(){
        setCounter(counter - 1);
        console.log(counter);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={upCounter}>Plus</button>
            <button onClick={downCounter}>Minus</button>
        </div>
    )
}

export default Counter