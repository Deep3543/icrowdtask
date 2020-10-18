import React, { Component } from 'react';
import Input from './Input';

export default class Sentence extends Component{
    render(){
        return(
            <div className="margin-top-20 margin-left-10">
                <h3 style={{background: "grey", padding: "10px", textAlign: "left"}}>Setting up your ask</h3>
                <h4>Give a short description for the Requester: </h4>
                <Input type="textarea" placeholder="description for the requester" />
            </div>
        )
    }
}