import "./ExpenseDate.css";


const ExpenseDate = (props) =>  {
  const Year = props.date.getFullYear();
  const month = props.date.toLocaleString("ko", { month: "long" });
  const day = props.date.toLocaleString("ko", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
