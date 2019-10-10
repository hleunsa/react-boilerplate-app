import React from 'react';
import Option from './Option';

const Options = (props) =>  (
    <div>
        <button 
            className="button button--link"
            onClick={props.handleDeleteOptions}
        >
            Remove all
        </button>
        <p>{`Number of options: ${props.options.length}`}</p>
        {props.options.length===0 && (<p>Please enter some options to get started!</p>)}
        
        <ol>
        {props.options.map(option => <Option Optiontext={option} key={option} handleDeleteOption={props.handleDeleteOption}/>)}
        </ol>
    </div>
);

export default Options;