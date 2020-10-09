import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Icon, Input, Menu } from 'semantic-ui-react';

export default class Nav extends Component{
    render(){
        return(
            <div  style={{background: "#9f9f93"}}>{
                <Container className="margin-top-42">
                    <Grid stackable column={2}>
                        <Grid.Column>
                            {/* Newsletter Sign Up */}
                            <h2 style={{display: 'inline', marginLeft: "0"}}>NEWSLETTER SIGN UP</h2>

                            <Input className="subscribe" placeholder="Enter your email" />
                            <a className="ui button subscribe">Subscribe</a>
                        </Grid.Column>
                        <Grid.Column>
                            {/* Social */}
                            <h2 style={{display: 'inline', verticalAlign: "middle"}}>CONNECT US</h2>
                                <ul className="social-list">
                                    <li color="facebook">
                                        <Icon circular size="large" name="facebook"/>
                                    </li>
                                    <li color="twitter">
                                        <Icon circular size="large" name="twitter"/>
                                    </li>
                                    <li color="instagram">
                                        <Icon circular size="large" name="instagram"/>
                                    </li>
                                </ul>
                        </Grid.Column>
                    </Grid>
                </Container>
            }</div>
        )
    }
}