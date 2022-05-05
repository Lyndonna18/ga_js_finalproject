function TransactionHistory(props){
  
    return(
        <div >
          <div className="Transactions">
        <h3> Transaction History</h3>
        <ul >
        {props.actualListProp.map((item, index) =>{
        return(
          <li key={index}>
            <p>{item.name} ${item.amt}
              <span onClick={(evt) => {props.removeButtonProp(evt, index)}}>🅧
              </span> 
              </p>
            </li>
        )
      })}
        </ul>
        </div>
        </div>
    )
}

export default TransactionHistory;