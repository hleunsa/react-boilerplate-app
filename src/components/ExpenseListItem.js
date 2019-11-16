import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}><h3> {description} </h3></Link>
        <p> Amount : {numeral(amount / 100).format('$0,0.00')} </p>
        <p> Date : {moment(createdAt).format('Do MMMM, YYYY')} </p>
        <p> Note : {note} </p>
    </div>
);

export default ExpenseListItem;