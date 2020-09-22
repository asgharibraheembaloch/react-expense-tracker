import React, { useState } from 'react';

export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0)
    return(
        <div>
            <h3>Add New Transaction</h3>
            <from>
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
            </from>           
        </div>
    )
}