import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleacClick = () => {
        let newText = '';
        setText(newText)
    }

    const handleRemoveClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handlecClick = () => {
        let text=document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handlerOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handlerOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to upperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handlecClick}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveClick}>Remove ExSpace</button>
                <button className="btn btn-primary mx-2" onClick={handleacClick}>Clear text</button>
            </div>

            <div className="container my-3" >
                <h2>Your text sumary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008*(text.split(" ").length-1)} Minutes read</p>
            </div>

            <div className="container my-3">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
