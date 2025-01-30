const TransactionCard = (props) =>{
    const{title,amount}=props; 
    
    const deleteTxn = () => {
        props.removeFromList(props.index);
    }
    
    return(<>
        <div className="transaction-card-container">
        <div className={`transaction-card ${amount<0? "negative":"positive"}`}>     
            <span>{title}</span>
            <span id="amount">${amount}</span>
        </div>
        <div className="btn-container">
            <button onClick={deleteTxn}>Delete</button>
        </div>   
        </div>     
        </>
    )
}
export default TransactionCard;