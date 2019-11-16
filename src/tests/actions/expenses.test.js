import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test ('should setup remove expense action', () => {
    const action = removeExpense('dand3ad');
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id : 'dand3ad'
    });
});

test ('should setup edit expense action', () => {
    const action = editExpense('djad23dj', {note: 'new note', description:'new description'});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id : 'djad23dj',
        updates: {note: 'new note', description:'new description'}
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Resto',
        amount: 70,
        createdAt: 1000,
        note: 'This is bill of the date'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should add expense with default value', () => {

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description :'',
            note : '',
            amount : 0,
            createdAt : 0,
            id: expect.any(String)
        }
    });
});