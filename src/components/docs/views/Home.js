import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../shared/views/Nav';

export default class Home extends Component{
    render(){
        return(
            <div>
                {/* Using Navigation Menu */}
                <Nav />

            </div>
        )
    }
}