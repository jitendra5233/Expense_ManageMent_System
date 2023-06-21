import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense =(props)=>{

    const saveExpenseDataHandler =
    (recievedExpenseData)=>{

const expenseData ={
    ...recievedExpenseData,
      id:Math.random().toString()
}
props.onAddExpense(expenseData);
console.log(expenseData);

    }
    return (

        <div className="new-expense">
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );

}
export default NewExpense;