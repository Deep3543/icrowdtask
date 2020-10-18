import React, { Component, useState } from 'react';
import { Form } from 'semantic-ui-react';
import Nav from '../helpers/NavRequesterTask';
import DescribeTask from '../helpers/DescribeTask';
import WorkerRequirement from '../helpers/WorkerRequirement';
import Radio from '../helpers/Radio';
import Button from '../helpers/Button';
import SetupTask from '../helpers/SetupTask';

function RequesterTask(){

    const [selectedOption, setSelectedOption] = useState('choice');
    const onSelectTaskChange = (e) =>{
        setSelectedOption(e.target.value)
    }

    return(
        <div>
            <Form>
            <Nav />
            
            {/* Select Task Type */}
            <div className="margin-top-20 margin-left-20" style={{textAlign: "left"}}>
                <p style={{display: "inline"}}>Select Task Type: </p>
                <Radio id="1" label="Choice Task" value="choice" isSelected={selectedOption === 'choice'} onChange={onSelectTaskChange} />
                <Radio id="2" label="Decision-Making Task" value="decision" isSelected={selectedOption === 'decision'} onChange={onSelectTaskChange} />
                <Radio id="3" label="Sentence-Level Task" value="sentence" isSelected={selectedOption === 'sentence'} onChange={onSelectTaskChange} />
            </div>
            
            <DescribeTask />
            <SetupTask 
                selected = {selectedOption}
            />
            <WorkerRequirement />
            <Button type="submit" text="Save" />
            </Form>
        </div>
    )
}
export default RequesterTask;