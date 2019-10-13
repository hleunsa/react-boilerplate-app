import React from 'react';
import { connect } from 'react-redux';

import { getVisibleExpenses }  from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <p> Expense List </p>
        {props.expenses.map(expense => <p>{expense.description}</p>)}
    </div>
);

const mapStateToProps = ({expenses, filters}) => {
    const visibleExpenses = getVisibleExpenses(expenses, filters);
    return {
        expenses: visibleExpenses
    };
};

export default connect(mapStateToProps)(ExpenseList);