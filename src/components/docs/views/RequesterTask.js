import React, { Component } from 'react';
import Nav from '../helpers/NavRequesterTask';
import Select from '../helpers/SelectTask';
import DescribeTask from '../helpers/DescribeTask';

export default class RequesterTask extends Component {
    render(){
        return(
            <div>
                <Nav />
                <Select />
                <DescribeTask />
            </div>
        )
    }
}