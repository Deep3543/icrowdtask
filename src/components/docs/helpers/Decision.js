import React, { Component } from 'react';
import Radio from './Radio';

export default class Decision extends Component{
    state = {
        selectedOption: ''
    };

    onRadioChange(ev) {
        this.setState({selectedOption: ev.target.value});
    };

    render(){
        return(
            <div className="margin-top-20 margin-left-10">
                <h3 style={{background: "grey", padding: "10px", textAlign: "left"}}>Setting up your ask</h3>
                <h4>Is this task Difficult?</h4>
                <Radio id="1" label="Yes" value="yes" isSelected={this.state.selectedOption === 'yes'} onChange={this.onRadioChange.bind(this)} />
                <Radio id="2" label="No" value="no" isSelected={this.state.selectedOption === 'no'} onChange={this.onRadioChange.bind(this)} />
            </div>
        )
    }
}