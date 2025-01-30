import TransactionCard from "./TransactionCard"
const TransactionList =(props)=>{

    return(
    <>
        <h4>Transactions</h4>
        <hr/>
        {props.transactions.map((trans,index)=>{
            return <TransactionCard 
            key={index} 
            index={index} 
            title={trans.title} 
            amount={trans.amount} 
            removeFromList={props.removeFromList}/>
        })}
        
    </>
    )
}
export default TransactionList;

