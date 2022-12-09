import React, { useState } from 'react';


import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
       <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectYear={filterChangeHandler} />     
        { 
                props.items.map((el,idx) => (
                    <ExpenseItem key={idx} date={el.date} title={el.title} amount={el.amount} />
                    )
            ) 
        }
        </Card>
        </div>
    )
}

export default Expenses;