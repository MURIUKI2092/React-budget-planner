import React ,{useState}from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const initialExpenses=[
  {id:1,charge:"rent",amount:"1300"},
  {id:2,charge:"rent",amount:"1500"},
  {id:3,charge:"rent",amount:"1200"}
]

const Planner =(children)=>{
 const [expenses,setExpenses]=useState(initialExpenses)
 console.log(expenses)
  return (
    <>
    <h1>Budget Calculator</h1>
    <ExpenseForm/>
    <ExpenseList expenses={expenses}/>


    <h1>  Total Spend:{" "}  <span className="total">
      ksh {" "}
      {expenses.reduce((acc,currentItem)=>{
        return (acc += currentItem.amount);
      },0)}
      </span> </h1>
    

    </>

  )
}
export default Planner
