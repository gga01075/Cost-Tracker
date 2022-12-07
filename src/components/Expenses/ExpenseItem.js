import React, { useState, useEffect } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) =>  {
  const [title, setTitle] = useState(props.title);

 
  const clickHandler = () => {
    setTitle('Updated!')
    
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

/* 
리액트는 JSX코드를 평가할 떄마다 컴포넌트함수를 평가하고 호출한다. 
하지만 우리는 값을 변경할 때 리액트에게 어떤 것이 변경되었고 어떤 컴포넌트가 재평가되어야한다고
말하는 방법이 필요하다. 그래서 리액트는 state라는 특별한 개념을 도입한다. 
state를 set시키면 해당 컴포넌트 함수는 재평가된다.  



*/