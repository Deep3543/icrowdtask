import React, {Component} from 'react';
import Checkbox from './Checkbox';

export default class Choice extends Component{

    handleChoiceCheck = (event, isInputChecked) => {
        this.props.onChange(event, isInputChecked, this.props.category);
    };

    render(){
        return(
            <div className="margin-top-20 margin-left-10">
                <h3 style={{background: "grey", padding: "10px", textAlign: "left"}}>Setting up your ask</h3>
                <Checkbox id="1" name="option1" value="Handling" label="Manual Handling" />
                <Checkbox id="2" name="option2" value="Driving" label="Driving involved" />
                <Checkbox id="3" name="option3" value="Machinary" label="Special Equipment Needed" />
            </div>
        )
    }
}