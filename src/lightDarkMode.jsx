import React, { useState } from 'react'

function LightDarkMode() {
    const [darkMode, setdarkMode] = useState(false)

    function changeMode(){
        setdarkMode(!darkMode)
    }

    const style = { 
        backgroundColor: darkMode ? 'red' : 'pink',
        padding: '10px',
        textAlign: 'center',
}


    return (
    <div style={style}>
        <button onClick={changeMode}>Change to {darkMode? "light" : "dark"} </button>
    </div>
)
}

export default LightDarkMode
