import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Icon, Input, Menu } from 'semantic-ui-react';

export default class Nav extends Component{
    render(){
        return(
            <div>{
                <Container>
                    <Grid stackable column={2}>
                        <Grid.Column>
                            {/* Newsletter Sign Up */}
                            <h2>NEWSLETTER SIGN UP</h2>
                            <Input className="subscribe" placeholder="Enter your email" />
                            <a className="ui button">Subscribe</a>
                        </Grid.Column>
                        <Grid.Column>
                            {/* Social */}
                            <h2>CONNECT US</h2>
                            <Button color="facebook">
                                <Icon name="facebook"/>
                            </Button>
                            <Button color="twitter">
                                <Icon name="twitter"/>
                            </Button>
                            <Button color="instagram">
                                <Icon name="instagram"/>
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Container>
            }</div>
        )
    }
}