import React from "react";
import Input from '@mui/material/Input';

const ExpenseForm =()=>{
  return(
    <div className="expenseForm">
      <div>
      <Input type ="text" placeholder="Enter spending"  />
      </div>
      <div>
      <Input  type= "number" placeholder="Enter money spent"  />
      </div>
      
    </div>
  )
}
export default ExpenseForm