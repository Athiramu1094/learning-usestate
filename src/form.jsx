import React, { useState } from 'react';
import './form.css';

function Form() {
    const [text, setText] = useState("");
    const [submittedText, setSubmittedText] = useState("");

    function myText(event) {
        setText(event.target.value);
    }

    function handleClick() {
        setSubmittedText(text);
    }

    return (
        <div className="form-container">
            <input type="text" placeholder="Type here" onChange={myText} />
            <button onClick={handleClick}>Submit</button>
            {submittedText && <h2>{submittedText}</h2>}
        </div>
    );
}

export default Form;