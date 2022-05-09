import { Link } from 'react-router-dom';

function Homepage(props){
    
    return(
    <div className="Homepage"> 
    <h3> Your Expense Tracker!</h3>
    <input type="text" name="firstName" value={props.firstNameProp} placeholder="First name" onChange={(event) => {props.setFirstNameProp(event.target.value)}}/>

    <input type="text" name="lastName" value={props.lastNameProp} placeholder="Last name" onChange={(event) => {props.setLastNameProp(event.target.value)}}/>

    <input type="number" name="spendLim" value={props.spendLimProp} placeholder="Add Spending Limit" onChange={(event) => {props.setSpendLimProp(event.target.value)}}/>

    <button onClick={()=>{props.clickSubmitButtonFuncProp()}}><Link to="/submit">SUBMIT</Link>
    </button>
      </div>
    )
}

export default Homepage;