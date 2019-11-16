
import React from 'react';

import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';

const ExpenseDashboardPage = () => (
    <div>
        <h1>Expenses Dashboard </h1>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;