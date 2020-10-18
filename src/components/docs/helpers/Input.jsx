import React from 'react';

const Input = (props) => {
    return(
        <div className="InputField">
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}
export default Input;