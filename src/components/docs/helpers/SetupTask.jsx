import React, {Component} from 'react';
import Choice from './Choice';
import Sentence from './Sentence';
import Decision from './Decision';

const SetupTask = (props) => {
    const selectValue = props.selected;

    if(selectValue === 'choice'){ return <Choice /> }
    else if(selectValue === 'sentence'){ return <Sentence /> }
    else if(selectValue === 'decision'){ return <Decision /> }
}
export default SetupTask;