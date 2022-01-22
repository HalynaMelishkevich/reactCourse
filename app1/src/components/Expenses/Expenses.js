import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';

function Expenses({expenses}) {
    return (
        <Card className='expenses'>
            {
                expenses.map(({title, amount, date, id}) => {
                    return (
                        <ExpenseItem title={title} amount={amount} date={date} key={id}/>
                    );
                })
            }
        </Card>
    );
}

export default Expenses;