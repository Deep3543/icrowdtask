import React from 'react';

const Radio = (props) => {
    return(
        <div className="RadioButton" style={{display: "inline", marginLeft: "15px"}}>
            <input type="radio" id={props.id} value={props.value} checked={props.isSelected} onChange={props.onChange}/>
            <label style={{marginLeft: "3px"}} htmlFor={props.id}>{props.label}</label>
        </div>
    )
}
export default Radio;