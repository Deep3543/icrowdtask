import React, {Component} from 'react';
import { Container, Grid, Input} from 'semantic-ui-react';

export default class DescribeTask extends Component{
    render(){
        return(
            <div className="margin-top-20">
                <Container>
                    <h3 style={{background: "grey", padding: "10px", textAlign: "left"}}>Describe your task to Workers</h3>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column width={2}>Title</Grid.Column>
                            <Grid.Column width={13}><input className="desc-input" placeholder="Enter task title" /></Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={2}>Description</Grid.Column>
                            <Grid.Column width={13}><input className="desc-input" placeholder="Enter task description" /></Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={2}>Expiry Date</Grid.Column>
                            <Grid.Column width={13}><input type="Date" className="desc-input" style={{width:"150px"}} /></Grid.Column>
                        </Grid.Row>    
                    </Grid>
                </Container>
            </div>
        )
    }
}