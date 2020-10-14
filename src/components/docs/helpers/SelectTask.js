import React, {Component} from 'react';
import {Input, Label} from 'semantic-ui-react';

export default class SelectTask extends Component{
    render(){
        return(
            <div className="margin-top-20 margin-left-20" style={{textAlign: "left"}}>
                <p style={{display: "inline"}}>Select Task Type: </p>
                <Input type="radio" value="choice" id="choice" name="taskType" checked/>
                <Label for="choice" >Choice Task</Label>

                <Input type="radio" value="decision" id="decision" name="taskType" />
                <Label for="decision" >Decision-Making Task</Label>

                <Input type="radio" value="sentence" id="sentence" name="taskType" />
                <Label for="sentence" >Sentence-Level Task</Label>
            </div>
        )
    }
}