import React from 'react';
import { connect } from 'react-redux';

import ExpenseListitem  from './ExpenseListItem';
import { getVisibleExpenses }  from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
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