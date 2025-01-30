import { useState } from "react";

const NewTxnForm = (props)=>{
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    
    const addTransaction = (e)=>{
        e.preventDefault()
        if(!title||!amount){
            alert("Field cannot be empty");
            return
        };
        console.log('added transaction',title,amount);
        props.addToList(title,amount);
        setTitle('');
        setAmount('');
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleAmountChange = (e) => {
        setAmount(+e.target.value)
    }

    console.log(title)
    return (
        <>
        <h3>Add new transaction</h3>
        <hr/>
        <form>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={handleTitleChange}/>
                
            </div>
            <div className="form-group">
                <label htmlFor="amount" >Amount:</label>
                <input type="number" id="amount" value={amount} onChange={handleAmountChange}/>
            </div>
            <button onClick={addTransaction}>Add Transaction</button>
        </form>
        </>

    )
}
export default NewTxnForm;