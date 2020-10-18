import React from 'react';

const Button = (props) => {
    return(
        <div className="btn">
            <button className="submit-button" type={props.type} > {props.text} </button>
        </div>
    )
}
export default Button;