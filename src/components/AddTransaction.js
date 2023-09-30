import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/Context';


export const AddTransaction = () => {
    const [text, setText]= useState('');
    const [amount, setAmount]=useState();
  const { addTransaction } = useContext(GlobalContext);
  const [error, setError] = useState(false);
  const [invalid, setInvalid]= useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
 
    if (text.trim() === '') {
      setError(true);
      return;
    }
    if ( amount === '' || amount.trim() === ''){
        setInvalid(true);
        return;
    }
    
    setError(false);
    setInvalid(false); 


    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Payment Type</label><br></br>
          <input
            type='text'
            id='textInput'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter Transaction Type'
            className={error ? 'error' : ''}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount<br />(income(+), expenses(-))</label>
          <input
            type='number'
            id='amountInput'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter Amount'
            className={invalid ? 'error' : ''}
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
