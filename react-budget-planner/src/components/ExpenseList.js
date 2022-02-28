import React from "react";
import {MdDelete} from "react-icons/md"



const ExpenseList =({expenses})=>{
  return(
    <div>
      <ul className="lists">
        {expenses.map(expense =>{
          return <div key={expense.id} expense={expense}/>
            
        
        })}
      </ul>
      {expenses.length>0 && <button className="deletebtn">Clear Expenses
      <MdDelete className="btn-icon"/>
      </button>}

    </div>

  )
}
export default ExpenseList