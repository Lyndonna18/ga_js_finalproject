import {useState}from 'react'
import { Link } from 'react-router-dom';

function TransactionHistory(props){
  const [ editItem, setEditItem] = useState([]);
  const [ expense, setExpense ] = useState("");
  const [ amount, setAmount ] = useState("");

//   let removeItem = (index) => {
//   props.setActualListProp([
//              ...props.actualListProp.slice(0, index),
//              ...props.actualListProp.slice(index + 1)
//            ]);
// }
  // const removeItem = (item) => {
  //   props.setActualListProp((prevState) =>
  //     prevState.filter((prevItem) => prevItem !== item)
  //   );
  // }
  const editFunc = (index) => {
    const newItem = [{name: expense, amt: amount}, ...props.actualListProp]
    console.log(newItem)
    props.setActualListProp(newItem)
    props.setHasClickedProp(false)
    }
     
  const clearAllFunc = () => {
    props.setActualListProp([])
    console.log(props.actualListProp)
    props.setHasClickedProp(false)
    props.setSpendLimProp(0)
    props.setTrackerNameProp("")
    props.setTotalProp(0)
    props.setTrackerLimProp(0)
    props.setFirstNameProp("")
    props.setLastNameProp("")
    }
    
    let removedItemIndex = 0;
  
    return(
        <div >
          <div className="Transactions">
        <h3> Transaction History</h3>
            {
              props.hasClickedProp === false
              ?
          <ul >
          {props.actualListProp.map((item, index) =>{
          return(
            <li key={index}>
              <p className="List">{item.name} ${item.amt}
              <span onClick={(evt) => {props.removeButtonProp(evt, index)}}>  🅧
              </span>
              <span onClick={() => {
                 props.setHasClickedProp(true)
                let removedItemIndex=index
                console.log(removedItemIndex)
                 let removedItem=[...props.actualListProp]
                 removedItem.splice(index,1)
                 props.setActualListProp(removedItem)
                //  let removedItemIndex=props.actualListProp.indexOf
                //  setEditItem.indexOf(removedItemIndex) 
                 setEditItem(item)
                }}> <button>Edit</button>
              </span>  
              </p>
              </li>
              )})}
                <button onClick={() => {
                  clearAllFunc()
                }}><Link to="/">CLEAR ALL</Link></button>
          </ul>
              :
              <div>
            <input type="text" placeholder={editItem.name} onChange={(event)=>{setExpense(event.target.value)}}/>

            <input type="number" placeholder={editItem.amt} onChange={(event)=>{setAmount(Number(event.target.value))}}/>

            <button onClick ={()=>{editFunc()
            let newItem=[...props.actualListProp]
                 newItem.splice(removedItemIndex,0, {name: expense, amt: amount})
                 props.setActualListProp(newItem)
                 // OR!
            // const newItem = [{name: expense, amt: amount}, ...props.actualListProp]
            // // console.log(newList)
            // props.setActualListProp(newItem)

            

              // Get the value from the form user submits

              // Create an object(equal to variable)
              
              // // consolelog object

              // // Append to actual List
              // setActualList(newList)

              // find indexof and splice to array

            }} 
            >Submit Edit</button> 
            
                <button onClick={() => {
                  clearAllFunc()
                }}><Link to="/">CLEAR ALL</Link></button>
            </div>

            }
          
            
        </div>
        </div>
    )
}

export default TransactionHistory;