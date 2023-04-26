import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';

function Expenses(props){
  const[filteredYear, setFilteredYear]= useState('2020');
    
  function filterChangeHandler(selectedYear){
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
     return expense.date.getFullYear().toString() === filteredYear;
  });

 return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
    {filteredExpenses.map((expense) =>
     (<ExpenseItem
                   key={expense.id}
                   title={expense.title} 
                   amount={expense.amount} 
                   date={expense.date}/>))}
    </Card>
    </div>
 );

}

export default Expenses;