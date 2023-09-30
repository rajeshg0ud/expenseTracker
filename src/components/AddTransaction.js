import React,{useContext} from 'react';
import { GlobalContext } from '../context/Context';
import { useState } from 'react';

export const AddTransaction = () => {
    const [text, setText]= useState('');
    const [amount, setAmount]=useState(0);

    const {addTransaction}=useContext(GlobalContext);

    const onSubmit=(e)=>{
        e.preventDefault();

        const newTransaction={
            id: Math.floor(Math.random()*1000000),
            text,
            amount: +amount,
        }

        addTransaction(newTransaction);
    }

  return (
    <div>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>text</label>
                <input type='text' value={text}  onChange={e=>setText(e.target.value)} placeholder='enter transaction type' />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amount<br />
                (negative - expense, positive - income)</label>
                <input type='number' value={amount}  onChange={e=>setAmount(e.target.value)} placeholder='enter amount' />
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}
