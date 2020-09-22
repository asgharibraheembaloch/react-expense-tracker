import React from 'react';

export const Transaction = ({transaction}) =>{
    return (
        <div>
            <li className="plus">
                {transaction.description}
                <span> {transaction.transactionAmount} </span>
                <button className="delete-btn">X</button>
            </li>
            {/* <li className="minus">
                salary payment
                    <span>-$1000</span>
                <button className="delete-btn">X</button>
            </li> */}
        </div>
    )
}