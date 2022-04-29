import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import TransactionHistory from './components/TransactionsHistory';
import { Routes, Route } from 'react-router-dom';
import NewExpense from './components/NewExpense';


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
  const [total, setTotal] =useState("")

  const addToList = () => {
    // console.log(expense)
    // console.log(amount)
    const newList = [{name: expense, amt: amount}, ...actualList]
    console.log(newList)
    setActualList(newList)
  }
  
  const clickButton = () => {
    setTrackerName(firstName)
    setTrackerLim(spendLim)
}
  const removeButton= (item, index) => {
    setActualList(actualList.filter((task) => actualList.indexOf(task) !== index))
  }

  return (
    <div className="App">
      <Homepage trackerLimProp={trackerLim} setTrackerLimProp={setTrackerLim} 
      clickButtonFuncProp={clickButton} 
      trackerNameProp={trackerName} setTrackerNameProp={setTrackerName} 
      firstNameProp={firstName} setFirstNameProp={setFirstName} 
      lastNameProp={lastName} setLastNameProp={setLastName} 
      emailProp={email} setEmailProp={setEmail} 
      spendLimProp={spendLim} setSpendLimProp={setSpendLim}/>

      
      {/* <Route path="/submit" element={<ExpensePage firstNameprop={setFirstName} spendLimprop={setSpendLim}/>}/> */}

      <div>
        <NewExpense expenseProp={expense} setExpenseProp={setExpense} 
        actualListProps={actualList} setActualListProp={setActualList}
        addToListFuncProp={addToList} 
        amountProp={amount} setAmountProp={setAmount}/>

        <TransactionHistory actualListProp={actualList} setActualListProp={setActualList}
        amountProp={amount} setAmountProp={setAmount} 
        removeButtonProp={removeButton}/>

        <h4>{trackerName} your Spending Limit is: ${trackerLim}</h4>
        {/* <h4>{trackerName}, you have {spendLim - total}</h4> */}
      </div>


    </div>
  );
}

export default App;
