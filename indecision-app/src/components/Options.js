import React from 'react';
import Option from './Option';

const Options = (props) =>  (
    <div>
        <p>{`Number of options: ${props.options.length}`}</p>
        {props.options.length===0 && (<p>Please enter some options to get started!</p>)}
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        <ol>
        {props.options.map(option => <Option Optiontext={option} key={option} handleDeleteOption={props.handleDeleteOption}/>)}
        </ol>
    </div>
);

export default Options;