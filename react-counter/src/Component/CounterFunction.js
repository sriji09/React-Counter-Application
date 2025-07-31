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
            <button className="counter-button increment"  onClick ={incrementNumber}>
                <span className="button-icon">➕</span>
            </button>
            <button  className="counter-button decrement" onClick={decrementNumber}>
                <span className="button-icon">➖</span>
            </button>
        </div>
    )
}

export default CounterFuction