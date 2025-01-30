import TransactionList from "./components/TransactionList"

import NewTxnForm from "./components/NewTxnForm"
import IncExpContainer from "./components/IncExpContainer"
import { useState } from "react"
const App = ()=>{
  const [transactions, setTransactions] = useState(
     [
      {title:'Snacks',amount: -20},
      {title:'Salary',amount: 300},
      {title:'Book',amount: -10},
      // {title:'Flower',amount: 50}
  ]
  )

  const addToList=(title,amount)=>{
    setTransactions([...transactions,{title:title, amount:amount}])
  }

  const removeFromList=(index)=>{
    console.log(index);
    const newTransactions = transactions.filter((txn,i) =>i!== index);
    setTransactions(newTransactions);
  }
  
  return(
    <>
    <div className="container">
    <h2>Expense Tracker</h2>
    <IncExpContainer transactions = {transactions}/>
    <TransactionList transactions={transactions} removeFromList={removeFromList}/>
    <NewTxnForm addToList={addToList}/>
    
    </div>
    </>
  )
}
export default App