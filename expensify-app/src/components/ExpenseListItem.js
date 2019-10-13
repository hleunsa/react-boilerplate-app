import React from 'react';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => (
    <div>
        <h3> {description} </h3>
        <p> Amount : {amount} </p>
        <p> Date : {createdAt} </p>
        <p> Note : {note} </p>
    </div>
);

export default ExpenseListItem;