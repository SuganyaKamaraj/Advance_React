import React from "react";
import DepositPage from "./containers/DepositPage";
import WithdrawPage from "./containers/WithdrawPage";
import HomePage from "./containers/HomePage";


const BankApp =() =>{
    return(
        <div>
            <h1>
                Suganya's Bank

            </h1>
            <HomePage />
            <br />
            
            <DepositPage />
           
            <br />
            <WithdrawPage />

           
        </div>
    )
}
export default BankApp