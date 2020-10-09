import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Nav from '../../shared/views/Nav';
import Foot from '../../shared/views/foot';

export default class Home extends Component{
    render(){
        return(
            <div>
                {/* Using Navigation Menu */}
                <Nav />
                <Container className="margin-top-45">
                    <div className="margin-top-20">
                        {/* Loading Image */}
                    </div>
                    
                </Container>
                <Foot />
            </div>
        )
    }
}