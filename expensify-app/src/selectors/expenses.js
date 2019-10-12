// Get visible expenses
export const getVisibleExpenses =  (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMach = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMach;

    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amout') {
            return a.amount > b.amount ? 1 : - 1;
        }
        return 0;
    });
};