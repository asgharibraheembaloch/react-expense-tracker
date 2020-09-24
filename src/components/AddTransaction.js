import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction)
    }
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="discription">
                        Discription
                    </label>
                    <input
                        type="text"
                        placeholder="detail of transaction"
                        id="description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    >
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input
                        type="number"
                        placeholder="Dollar value of transaction"
                        id="transactionAmount"
                        value={transactionAmount}
                        onChange={(e)=>setTransactionAmount(e.target.value)}
                    >
                    </input>
                </div>
                <button className="btn">add Transaction</button>          
            </form>           
        </div>
    )
}