import React from 'react'

export default function About(props) {
    return (
        <>
        <div className="container">
        <div className='my-4' style={{color: props.mode==='dark'?'white':'black'}}><h1>About</h1></div>
        <p className='my-4' style={{color: props.mode==='dark'?'white':'black'}}>
            TextEdit is a website aimed to make the work related to text manipulation and edity easier and stressfree.Using this application you can easily change the text to Uppercase,Lowercase,Titlecase,Clear extra spaces from the text and many more.Different types of dark mode is also given in the application which reduces stress on the eyes.
        </p>
        </div>
        </>
    )
}
