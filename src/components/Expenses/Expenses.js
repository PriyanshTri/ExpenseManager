import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
function Expenses(expenses){
    return (
        <Card className="expenses">
        <ExpenseItem
        title={expenses.data[0].title}
        amount={expenses.data[0].amount}
        date={expenses.data[0].date}
      />
      <ExpenseItem
        title={expenses.data[1].title}
        amount={expenses.data[1].amount}
        date={expenses.data[1].date}
      />
      <ExpenseItem
        title={expenses.data[2].title}
        amount={expenses.data[2].amount}
        date={expenses.data[2].date}
      />
      <ExpenseItem
        title={expenses.data[3].title}
        amount={expenses.data[3].amount}
        date={expenses.data[3].date}
      />
      </Card>
    )
}
export default Expenses;