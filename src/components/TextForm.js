import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !","success");
    }
    const handleClick = () => {
        setText("");
        props.showAlert("Text Cleared !","success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard !","success");

    }

    const titleCase = () => {
        var string = text;
        if(string==='')
            setText('');
        else{
        var sentence = string.toLowerCase().split(" ");
        for (var i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        setText(sentence.join(" "));
        props.showAlert("Converted to Titlecase !","success");
    }
    }
    
    // It will remove extra whitespaces from the text 
    const extraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed !","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    

    // This is called a hook and text is a state here.
    // Here text is the content which can be updated only using setText 
    const [text, setText] = useState('');

    return (
        <>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea id="myBox" rows="10" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={titleCase}>Convert to TitleCase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={extraSpace}>Remove Extraspaces</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleClick}>Clear</button>
            </div>

            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Text Summary</h2>
                <p>{text.length>0?(text.charAt(text.length-1)===' '?(text.split(" ").length + text.split("\n").length - 1)-1:(text.split(" ").length + text.split("\n").length - 1)) :'0'} words and {text.length} characters</p>
                <p>{0.008 * text.length} read minutes</p>
                <h2>Text Preview</h2>
                <p>{text.length>0?text:'Enter something in textbox to see preview'}</p>
            </div>
        </>
    )
}
