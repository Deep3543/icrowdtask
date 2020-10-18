import React from 'react';

const Checkbox = (props) => {
    return(
        <div className="checkbox">
            <input type="checkbox" id={props.id} name={props.name} value={props.value} />
            <label style={{marginLeft: '5px'}} htmlFor={props.id}>{props.label}</label>
        </div>
    )
}
export default Checkbox;