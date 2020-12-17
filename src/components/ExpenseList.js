import React from 'react';
import { connect } from 'react-redux';

import ExpenseListitem  from './ExpenseListItem';
import { getVisibleExpenses }  from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        {
            props.expenses.length === 0 ? (
                <p> No expenses </p>
            ) : (
                props.expenses.map(expense => <ExpenseListitem key={expense.id} {...expense}/>)
            )
        }

    </div>
);

const mapStateToProps = ({expenses, filters}) => {
    const visibleExpenses = getVisibleExpenses(expenses, filters);
    return {
        expenses: visibleExpenses
    };
};

export default connect(mapStateToProps)(ExpenseList);