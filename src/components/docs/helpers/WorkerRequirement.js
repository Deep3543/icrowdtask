import React, {Component} from 'react';
import { Container, Grid, Input, Label } from 'semantic-ui-react';
import InputText from '../helpers/Input';
import Radio from '../helpers/Radio';

export default class WorkerRequirement extends Component{
    state = {
        selectedOption: 'no'
    };

    onRadioChange(ev) {
        this.setState({selectedOption: ev.target.value});
    };
    
    render(){
        return(
            <div className="margin-top-20 margin-left-10">
                {/* Worker Requirement section of Requester Task */}

                <Container style={{width: "100%"}}>
                <h3 style={{background: "grey", padding: "10px", textAlign: "left"}}>Worker Requirement</h3>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column width={3}>Require Master Workers</Grid.Column>
                            <Grid.Column width={11}>
                                <Radio id="1" label="Yes" value="yes" isSelected={this.state.selectedOption === 'yes'} onChange={this.onRadioChange.bind(this)} />
                                <Radio id="2" label="No" value="no" isSelected={this.state.selectedOption === 'no'} onChange={this.onRadioChange.bind(this)} />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>Reward per response</Grid.Column>
                            <Grid.Column width={5}><InputText type="text" className="desc-input" placeholder="" /></Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>Number of workers</Grid.Column>
                            <Grid.Column width={5}><InputText type="text" className="desc-input" placeholder="" /></Grid.Column>
                        </Grid.Row>    
                    </Grid>
                </Container>
            </div>

        )
    }
}