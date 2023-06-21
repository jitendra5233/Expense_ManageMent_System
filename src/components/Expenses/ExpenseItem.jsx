import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) =>{
    
    return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
        <h2>{props.title}</h2>
        <div className='expense-item__description'>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
        </Card>

    );

}
export  default ExpenseItem;