import React from 'react'

export default function Alert(props) {
const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

    return(
        <div style = {{height: '50px'}}>
        {/* Kyo ki baaki ka code kisi container ke andar nhi h wo directly js k andar h : curly brackets m hoga.  */}
        {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
        </div>
    )
}