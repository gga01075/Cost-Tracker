import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    return (
       <Card className="expenses">
        { 
            props.items.map((el,idx) => (
                <ExpenseItem key={idx} date={el.date} title={el.title} amount={el.amount} />
                )
          ) 
        }
        </Card>
      
    )
}

export default Expenses;