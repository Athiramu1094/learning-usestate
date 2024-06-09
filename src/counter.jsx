import React, { useState } from 'react'
import './counter.css'

function Counter(){
    
    const [num, setNum] = useState(1)
    function Increment(){
        setNum(num + 1)
    }

    return (
    <div className='counter-container'>
    <span>{num}</span>
    <button onClick={Increment}>Add</button>
    </div>
)
}

export default Counter
