import React, { useReducer, useState , createContext} from 'react';
import './transaction.css';

export  const UserContext = createContext();
function Transaction() {

  const reducer = (balance, action) => {
    switch (action.type) {
      case "WITHDRAW":
        return balance - action.value;
      case "DEPOSIT":
        return balance + action.value;
      default:
        return balance;
    }
  };

  const [balance, dispatch] = useReducer(reducer, 10000);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');

  const Withdraw = () => {
    if (withdrawAmount > 0) {
      const withdrawValue = parseInt(withdrawAmount);
      
      if (withdrawValue <= balance) {
        dispatch({ type: 'WITHDRAW', value: withdrawValue });
        setWithdrawAmount('');
        alert(`DEBITED: ${withdrawValue}\nAvailable Balance: ${balance - withdrawValue}`);
      } 
      else {
        alert('Insufficient funds');
      }
    } else {
      alert('Please enter a valid withdraw amount greater than zero');
    }
  };
  
  const Deposit = () => {
    if (depositAmount > 0) {
      const depositValue = parseInt(depositAmount);
      
      dispatch({ type: 'DEPOSIT', value: depositValue });
      setDepositAmount('');
      alert(`CREDITED: ${depositValue}\nAvailable Balance: ${balance + depositValue}`);
    }

     else {
      alert('Please enter a valid deposit amount greater than zero');
    }
  };
  

  return (
    <>
      <UserContext.Provider value={{ balance }}>
      <div className='container-fluid form-container p-5'>
        <div className='row'>
          {/* Deposit page start */}
          <div className='col-md-4 depositform'>
            <h1 style={{ textAlign: "center" }}>DEPOSIT</h1>
            <form>
             

              <label style={{ paddingLeft: "20px", fontWeight: "600" }}>DEPOSIT*</label><br />
              <input
                id='tranfield'
                type="number"
                placeholder="Enter deposit amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)} /><br /><br /><br />
               <h4 style={{ textAlign: "center", color: "lime" }}>CURRENT BALANCE: {balance}</h4>
              <button type="button" className="btn btn-info btn-outline-warning transbtn" onClick={Deposit}>Deposit</button>
            </form>
          </div>
          {/* Deposit page end */}

          <div className='col-md-4 withdrawform '>
            <h1 style={{ textAlign: "center" }}>WITHDRAW</h1>
            <form>
              <label style={{ paddingLeft: "20px", fontWeight: "600" }}>WITHDRAW*</label><br />
              <input
                id='tranfield'
                type="number"
                placeholder="Enter withdraw amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)} /><br /><br /><br />

              <h4 style={{ textAlign: "center", color: "red" }}>CURRENT BALANCE: {balance}</h4>
              <button type="button" className="btn btn-info btn-outline-warning transbtn" onClick={Withdraw}>WITHDRAW</button>
            </form>
          </div>
        </div>
      </div>
      </ UserContext.Provider>
    </>
  );
}

export default Transaction;
