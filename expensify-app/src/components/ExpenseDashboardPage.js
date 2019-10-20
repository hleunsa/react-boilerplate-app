
import React from 'react';

import ExpenseListFilter from './ExpenseListFilters';
import ExpenseList from './ExpenseList';

const ExpenseDashboardPage = () => (
    <div>
        <h1>Expenses Dashboard </h1>
        <ExpenseListFilter/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;