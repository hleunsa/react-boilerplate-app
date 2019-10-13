import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({id, description, note, amount, createdAt, dispatch}) => (
    <div>
        <h3> {description} </h3>
        <p> Amount : {amount} </p>
        <p> Date : {createdAt} </p>
        <p> Note : {note} </p>
        <button onClick={() => dispatch(removeExpense(id))}
        >Remove</button>
    </div>
);

export default connect()(ExpenseListItem);