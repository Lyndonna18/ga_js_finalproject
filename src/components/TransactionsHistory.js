function TransactionHistory(props){
    return(
        <>
        <p> TransactionHistory</p>
        <ul className="Transactions">
        {props.actualListProp.map((item, index) =>{
        return(
          <li key={index}>
              
            {console.log(item.name)}
            {item.amt}
            <span onClick={(evt) => {props.removeButtonProp(evt, index)}}>🅧
              </span> 
            </li>
        )
      })}
        </ul>
        </>
    )
}

export default TransactionHistory;