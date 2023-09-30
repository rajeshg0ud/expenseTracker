import React, {useContext} from 'react';
import { GlobalContext } from '../context/Context';

export const Transaction = ({transaction}) => {
  const {deleteTransaction}= useContext(GlobalContext);
  return (
        <li className={transaction.amount<0? 'minus': 'plus'}><span className='text'>
         {transaction.text} </span> {transaction.amount <0? "-" : "+"}₹{Math.abs(transaction.amount)}<button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>x</button>
        </li>
            
  )
}
