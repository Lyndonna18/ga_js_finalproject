import {useState}from 'react'

function TransactionHistory(props){
  const [ editItem, setEditItem] = useState(null);

//   const removeItem = (index) => {
//   props.setActualListProp([
//              ...props.actualListProp.slice(0, index),
//              ...props.actualListProp.slice(index + 1)
//            ]);
// }
  const removeItem = (item) => {
    props.setActualListProp((prevState) =>
      prevState.filter((prevItem) => prevItem !== item)
    );
  }
  
    return(
        <div >
          <div className="Transactions">
        <h3> Transaction History</h3>
        <ul >
        {props.actualListProp.map((item, index) =>{
        return(
          <li key={index}>
            {
              props.hasClickedProp === false

              ?

              <p className="List">{item.name} ${item.amt}
              <span onClick={(evt) => {props.removeButtonProp(evt, index)}}>  🅧
              </span>
              <span onClick={() => {
                 props.setHasClickedProp(true)
                   }}> <button>Edit</button>
              </span>  
              </p>

              :
              <div>
               

            <input type="text" value={props.expenseProp} placeholder="Edit Expenses" onChange={(event)=>{props.setExpenseProp(event.target.value)}}/>

            <input type="number" value={props.amountProp} placeholder="Edit amount" onChange={(event)=>{props.setAmountProp(Number(event.target.value))}}/>

            <button onClick ={()=>{
              props.setActualListProp((prevState) =>
                  prevState.filter((prevItem) => prevItem !== item)
                  );
            }}>Submit Edit</button> 
            </div>

            }
          
            </li>
              )})}
        </ul>
        </div>
        </div>
    )
}

export default TransactionHistory;