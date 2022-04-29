function Homepage(props){
    
    return(
    <div className="Homepage"> 
    <h3> {props.trackerNameProp} Expense Tracker!</h3>
    <input type="text" name="firstName" value={props.firstNameProp} placeholder="First name" onChange={(event) => {props.setFirstNameProp(event.target.value)}}/>

    <input type="text" name="lastName" value={props.lastNameProp} placeholder="Last name" onChange={(event) => {props.setLastNameProp(event.target.value)}}/>

    <input type="text" name="email" value={props.emailProp} placeholder="email" onChange={(event) => {props.setEmailProp(event.target.value)}}/>  

    <input type="number" name="spendLim" value={props.spendLimProp} placeholder="Add Spending Limit Here" onChange={(event) => {props.setSpendLimProp(event.target.value)}}/>

    <button onClick={()=>{props.clickButtonFuncProp()}}>SUBMIT</button>
    <button onClick={()=>{}}>Clear All</button>

      </div>
    )
}

export default Homepage;