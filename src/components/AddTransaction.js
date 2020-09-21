import React from 'react';

export const AddTransaction = () => {
    return(
        <div>
            <h3>Add New Transaction</h3>
            <from>
                <div className="form-control">
                    <label htmlFor="discription">
                        Discription
                    </label>
                    <input type="text" placeholder="detail of transaction"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" placeholder="Dollar value of transaction"></input>
                </div>
                <button className="btn">add Transaction</button>          
            </from>           
        </div>
    )
}