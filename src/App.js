import {Header} from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import  AddTransaction  from "./components/AddTransaction";
import {GlobalProvider} from './context/Context';
import './App.css';


function App(){
    return(
        <GlobalProvider>
            <div className="container">
                <div className="green">
                <Header />
                <Balance />
                </div>
                <IncomeExpense />
                <div className="white">
                <AddTransaction />
                <TransactionList />
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;