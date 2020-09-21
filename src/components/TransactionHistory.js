import React from 'react';

export const TransactionHistory = () => {
    return(
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                <li className="plus">
                    project income deliverable
                    <span>$10,000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    salary payment
                    <span>-$1000</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>            
        </div>
    )
}