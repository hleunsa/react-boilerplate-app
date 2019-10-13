// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByDate = () => ({ type: 'SORT_BY_DATE' });

// SORT_BY_AMOUNT
export const sortByAmout = () => ({ type: 'SORT_BY_AMOUNT' });

// SET_START_DATE
export const setFilterStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate

});

// SET_END_DATE
export const setFilterEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate

});