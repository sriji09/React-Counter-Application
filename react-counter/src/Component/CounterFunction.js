import React, {useState} from 'react'

function CounterFuction() {
    const [count, setCount] = useState(0);
    const incrementNumber = () => {
        setCount(prevCount => prevCount+1);
    }
    const decrementNumber =() => {
        if(count>0) {
            setCount(prevCount => prevCount -1)
        }
    }
    return(
        <div>
            <h2>Function Component</h2>
            <p>Number - {count}</p>
            <button onClick ={incrementNumber}>+</button>
            <button onClick={decrementNumber}>-</button>
        </div>
    )
}

export default CounterFuction