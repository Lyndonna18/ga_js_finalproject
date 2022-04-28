import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import ExpensePage from './components/ExpensePage';
import TransactionHistory from './components/TransactionsHistory';
import { Routes, Route } from 'react-router-dom';
import NewExpense from './components/NewExpense';


function App() {
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[spendLim, setSpendLim] = useState("");
  const[expense, setExpense] = useState("");
  const[actualList, setActualList] = useState([]);
  const [amount, setAmount] =useState("")
  const [total, setTotal] =useState("")

  const addToList = () => {
    console.log(expense)
    console.log(amount)
    const newList = [{name: expense, amt: amount}, ...actualList]
    console.log(newList)
    setActualList(newList)
  }
  const removeButton= (item, index) => {
    setActualList(actualList.filter((task) => actualList.indexOf(task) !== index))
  }

  return (
    <div className="App">
      <Homepage />

      <input type="text" name="firstName" value={firstName} placeholder="First name" onChange={(event) => {setFirstName(event.target.value)}}/>
      <input type="text" name="lastName" value={lastName} placeholder="Last name" onChange={(event) => {setLastName(event.target.value)}}/>
      <input type="text" name="email" value={email} placeholder="email" onChange={(event) => {setEmail(event.target.value)}}/>  
      <input type="number" name="spendLim" value={spendLim} placeholder="Add Spending Limit Here" onChange={(event) => {setSpendLim(event.target.value)}}/>
      {/* <Route path="/submit" element={<ExpensePage firstNameprop={setFirstName} spendLimprop={setSpendLim}/>}/> */}

      <div>
        <NewExpense expenseProp={expense} setExpenseProp={setExpense} 
        actualListProps={actualList} setActualListProp={setActualList}addToListFuncProp={addToList} 
        amountProp={amount} 
        setAmountProp={setAmount}/>
        <TransactionHistory actualListProp={actualList} 
        setActualListProp={setActualList}
        amountProp={amount} 
        setAmountProp={setAmount} 
        removeButtonProp={removeButton}/>
      </div>


    </div>
  );
}

export default App;
