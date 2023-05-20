import React from "react"
import './Card.css';

const Card = (props) => {
    let style = {};
    if (props.showing) {
        style.backgroundColor = props.backgroundColor;
    }
    return (
        <div 
            className="card-container" 
            style={style} 
            onClick={props.onClick} />
    );
}

export default Card;