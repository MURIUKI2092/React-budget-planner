import React,{useState} from "react";


const initialExpenses=[
  {id:1,charge:"rent",amount:"1300"},
  {id:2,charge:"rent",amount:"1500"},
  {id:3,charge:"rent",amount:"1200"}
] 

const ExpensesDetails=()=>{
  const [expenses,setExpenses]=useState(initialExpenses)

  return(
      <h1>  Total Spend:{" "}  <span className="total">
      ksh {" "}
      {expenses.reduce((acc,currentItem)=>{
        return(acc += parseInt(currentItem.amount));
      },0) }
      </span> </h1>
  )
}
export default ExpensesDetails