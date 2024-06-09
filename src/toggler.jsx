import React, { useState } from 'react'
import './toggler.css'

function Toggler(){
    const [isHappy, setisHappy] = useState(false)
    function myMood(){
        setisHappy(!isHappy)
    }

    return (
    <div className='toggler-container'>
        <span onClick={myMood}>{isHappy? ":)" : ":("} </span>

        
    </div>
)
}

export default Toggler
