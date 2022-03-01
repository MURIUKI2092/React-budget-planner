import React from "react";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const ExpenseForm =()=>{
  return(
    <div className="expenseForm">
      <div>
      <Input type ="text" placeholder="Enter spending"  />
      </div>
      <div>
      <Input  type= "number" placeholder="Enter money spent"  />
      </div>
      <Button variant="contained" endIcon={<SendIcon />}>
  Submit
</Button>
      
    </div>
  )
}
export default ExpenseForm