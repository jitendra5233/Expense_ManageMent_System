
import React, {useState}  from "react";

import './ExpenseForm.css';

const ExpenseForm =(props)=>{

    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setenteredAmount]=useState('')
    const [enteredDate,setenteredDate]=useState('')

    const titleChnageHandler=(event)=>{ 
      setEnteredTitle(event.target.value);
    };
    const amountChnageHandler=(event)=>{
     setenteredAmount(event.target.value)
     };
    const dateChnageHandler=(event)=>{ 
       setenteredDate(event.target.value)
    };



    const submitHandler =(event)=>{
        event.preventDefault();
       
        const expenseData = {
         title:enteredTitle,
         amount:enteredAmount,
         date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
             <label>Title</label>
             <input type="text" value={enteredTitle} onChange={titleChnageHandler}/>
            </div>
            <div className="new-expense__control">
             <label>Amount</label>
             <input type="number" min="0.01"  step="0.01" value={enteredAmount} onChange={amountChnageHandler}/>
            </div> 
            <div className="new-expense__control">
             <label>Date</label>
             <input type="date"  value={enteredDate} onChange={dateChnageHandler}/>
            </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;