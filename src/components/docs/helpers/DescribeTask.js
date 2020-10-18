import React, {Component} from 'react';
import { Container, Grid, Input} from 'semantic-ui-react';
import InputText from '../helpers/Input';

export default class DescribeTask extends Component{
    render(){
        return(
            <div className="margin-top-20 margin-left-10">
                <Container style={{width: "100%"}}>
                    <h3 style={{background: "grey", padding: "10px", textAlign: "left"}}>Describe your task to Workers</h3>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column width={2}>Title</Grid.Column>
                            <Grid.Column width={6}><InputText type="text" placeholder="Enter task title" /></Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={2}>Description</Grid.Column>
                            <Grid.Column width={6}><InputText type="text" placeholder="Enter task description" /></Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={2}>Expiry Date</Grid.Column>
                            <Grid.Column width={4}><InputText type="Date" className="desc-input" /></Grid.Column>
                        </Grid.Row>    
                    </Grid>
                </Container>
            </div>
        )
    }
}