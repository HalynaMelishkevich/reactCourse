import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Car Insurance 1',
            date: new Date(2021, 2, 28),
            amount: 249.56
        },
        {
            id: 'e2',
            title: 'Car Insurance 2',
            date: new Date(2021, 3, 28),
            amount: 349.56
        },
        {
            id: 'e3',
            title: 'Car Insurance 4',
            date: new Date(2021, 4, 28),
            amount: 449.56
        }
    ];

    return (
        <div>
            <h2> Let's get started!</h2>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
