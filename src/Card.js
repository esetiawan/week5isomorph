import React from 'react';
import './App.css';

const Card= props => {
    return (
        <div className="w3-card-4" style={{width:'20%'}}>
            <div className="w3-container w3-center">
                <p>{props.name}</p>
                <p>{props.phone}</p>
                <p><button className="w3-button w3-purple" onClick={props.onDelete}>Delete</button> </p>
                <input type="text" value={props.name} onChange={props.onChangeInput}/>
                <div>{props.children}</div>
            </div>
        </div>
    )
}
export default Card;
//rafce