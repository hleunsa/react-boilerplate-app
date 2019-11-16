import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.Optiontext}</p>
        <button 
            className="button button--link"
            onClick={() => {props.handleDeleteOption(props.Optiontext)}}
        >
            remove
        </button>
    </div>
);

export default Option;
