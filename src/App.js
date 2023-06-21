import React, { useState } from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    let DUMMY_EXPENSE=[
        {
            id:'e1',
            title:'School Fee',
            amount:300,
           date: new Date(2023, 2, 12)
        },
        {
            id:'e2',
            title:'Houese Rent',
            amount:700,
           date: new Date(2023, 5, 15)
        },
        {
            id:'e3',
            title:'Food',
            amount:540,
           date: new Date(2023, 12, 25)
        },
        {
            id:'e1',
            title:'Books',
            amount:500,
           date: new Date(2023, 3, 10)
        },

    ];
      
    const [expenses,setExpenses]=useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense)=>{
        const updateExpenses =[expense, ...expenses];
        setExpenses(updateExpenses);
    }
    return (
    <>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses item={expenses}/>
    </>
    );
    
    
}
export default App;