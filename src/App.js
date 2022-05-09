import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import TransactionHistory from './components/TransactionsHistory';
import { Routes, Route } from 'react-router-dom';
import NewExpense from './components/NewExpense';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

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
  const [ hasClicked, setHasClicked] =useState(false)

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

  const clickSubmitInfoButton = () => {
    setTrackerName(firstName)
    setTrackerLim(spendLim)
    }

//  const addAmounts =() =>{
//    actualList.amt.reduce((a, b)=> a + b, 0)
//  }

  const removeButton= (item, index) => {
    setActualList(actualList.filter((task) => actualList.indexOf(task) !== index))

    let sum;
    actualList.forEach(charge => {
      sum= sum+ charge.amt;
    });
    setTotal(sum)
  }

  const submitEditButton =(item, index) =>{
    // console.log("Edit this item")
    // Show edit form
    // const newList[index] = {name: item.name, amt: item.amt}
    // setActualList(newList)
  console.log(item.amt)
  console.log(item.name)
  console.log(index)
  }

  

  return (
    <div className="All">
      <Routes>
      <Route className="Home" path="/" element={
      <Homepage trackerLimProp={trackerLim} setTrackerLimProp={setTrackerLim} 
      clickSubmitButtonFuncProp={clickSubmitInfoButton} 
      trackerNameProp={trackerName} setTrackerNameProp={setTrackerName} 
      firstNameProp={firstName} setFirstNameProp={setFirstName} 
      lastNameProp={lastName} setLastNameProp={setLastName} 
      spendLimProp={spendLim} setSpendLimProp={setSpendLim}/>}/>

    
      <Route className="container" path="/submit" element={<>
        <NewExpense 
        trackerNameProp={trackerName}
        expenseProp={expense} setExpenseProp={setExpense} 
        actualListProp={actualList} setActualListProp={setActualList}
        addToListFuncProp={addToList} 
        amountProp={amount} setAmountProp={setAmount}/> 

        <TransactionHistory
        firstNameProp={firstName} setFirstNameProp={setFirstName} lastNameProp={lastName} setLastNameProp={setLastName} 
        totalProp={total} setTotalProp={setTotal}removeButtonProp={removeButton}
        setHasClickedProp={setHasClicked}
        hasClickedProp={hasClicked}
        expenseProp={expense} setExpenseProp={setExpense} 
        actualListProp={actualList} setActualListProp={setActualList}
        addToListFuncProp={addToList} 
        amountProp={amount} setAmountProp={setAmount} spendLimProp={spendLim} setSpendLimProp={setSpendLim} trackerLimProp={trackerLim} setTrackerLimProp={setTrackerLim} trackerNameProp={trackerName} setTrackerNameProp={setTrackerName}/>
        </>
        }/>
        </Routes>   
    </div>
  );
}

export default App;
