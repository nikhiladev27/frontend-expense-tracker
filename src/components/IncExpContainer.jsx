const IncExpContainer = (props) =>{
    const {transactions} = props
    let income=0;
    let expense=0;
    transactions.forEach((txn) => {
        if(txn.amount>=0){
            income+=txn.amount;
        }
        else{
            expense+=txn.amount;
        }
        
    });
    return( <>
    <h2>Your Balance</h2>
    <h1>$500</h1>
    <div className="Inc-Exp-Container">
        <div>
            <h2>Income</h2>
            <div>${income}</div>
        </div>
        <div className="separator"/>
            <div>
            <h2>Expense</h2>
            <div>${expense}</div>
            </div>
    </div>
    </>
    )
}
export default IncExpContainer;