import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import TransactionHistory from './components/TransactionsHistory';
import { Routes, Route } from 'react-router-dom';
import NewExpense from './components/NewExpense';
import { useEffect } from 'react'

function App() {
  const[trackerName, setTrackerName] = useState("");
  const[trackerLim, setTrackerLim] = useState("");
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[spendLim, setSpendLim] = useState("");
  const[expense, setExpense] = useState("");
  const[actualList, setActualList] = useState([]);
  const [amount, setAmount] =useState("")
  const [total, setTotal] =useState(0)

  const addToList = () => {
    // console.log(expense)
    // console.log(amount)
    const newList = [{name: expense, amt: amount}, ...actualList]
    // console.log(newList)
    setActualList(newList)
  }

  const addTotal = () =>{
    let sum=0
    actualList.forEach(charge => {
      sum= sum+ charge.amt;
    });
    setTotal(sum)
  }
  useEffect(addTotal, [actualList]) 

  const clickButton = () => {
    setTrackerName(firstName)
    setTrackerLim(spendLim)
    }

//  const addAmounts =() =>{
//    actualList.amt.reduce((a, b)=> a + b, 0)
//  }

  const removeButton= (item, index) => {
    setActualList(actualList.filter((task) => actualList.indexOf(task) !== index))
  }

  return (
    <div className="Body">
      <Homepage trackerLimProp={trackerLim} setTrackerLimProp={setTrackerLim} 
      clickSubmitButtonFuncProp={clickButton} 
      trackerNameProp={trackerName} setTrackerNameProp={setTrackerName} 
      firstNameProp={firstName} setFirstNameProp={setFirstName} 
      lastNameProp={lastName} setLastNameProp={setLastName} 
      emailProp={email} setEmailProp={setEmail} 
      spendLimProp={spendLim} setSpendLimProp={setSpendLim}/>

      
      {/* <Route path="/submit" element={<ExpensePage firstNameprop={setFirstName} spendLimprop={setSpendLim}/>}/> */}

      <div className="container">
        <NewExpense expenseProp={expense} setExpenseProp={setExpense} 
        actualListProps={actualList} setActualListProp={setActualList}
        addToListFuncProp={addToList} 
        amountProp={amount} setAmountProp={setAmount}/>

        <TransactionHistory 
        // addAmountsFuncProp={addAmounts}
        totalProp={total} setTotalProp={setTotal}
        actualListProp={actualList} setActualListProp={setActualList}
        amountProp={amount} setAmountProp={setAmount} 
        removeButtonProp={removeButton}/>

        
      </div>
      <h4>Your total expenses is now ${total}</h4>
      <h4>{trackerName}, your Spending Limit is: ${(trackerLim -  total)}</h4>
      
    </div>
  );
}

export default App;
