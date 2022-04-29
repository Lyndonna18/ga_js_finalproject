function NewExpense(props){
    return(
        <div>
        <h3> New Expenses </h3>
        <div className="NewExpense">
            <input type="text" value={props.expenseProp} placeholder="Add new Expenses" onChange={(event)=>{props.setExpenseProp(event.target.value)}}/>
            <input type="number" value={props.amountProp} placeholder="Add amount" onChange={(event)=>{props.setAmountProp(Number(event.target.value))}}/>

            <button onClick ={()=> {props.addToListFuncProp()}}> Submit Expense</button>
        </div>            
        </div>
    )
}

export default NewExpense;