function addExpense(newExpense,originalExpenseArray){
    originalExpenseArray.push(newExpense);

    return originalExpenseArray;
}

let newExpense = 100;
let originalExpenseArray = [10,20,30];
let result = addExpense(newExpense,originalExpenseArray);
console.log(result)