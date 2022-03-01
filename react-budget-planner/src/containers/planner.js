import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import Box from '@mui/material/Box';
/* import ExpenseItem from "../components/ExpenseItem"; */
import { Typography } from "@mui/material";
import ExpensesDetails from "../components/expenses";
/* import ExpenseList from "../components/ExpenseList"; */
/* import ExpenseList from "../components/ExpenseList"; */



const Planner =(children)=>{
  return (
    <Box
    sx={{
      width: 550,
      height: 500,
      backgroundColor: 'white',
      padding:"10px",
      marginTop:"20px",
      
      
    }}>
      <Typography variant="h3" textAlign={'center'} borderBottom={"1px solid black"}>
        Planner
      </Typography>
      <ExpenseForm marginTop={"50px"} marginBottom ={"30px"}/>
      {/* <ExpenseList/> */}
      {/* <ExpenseItem/> */}
      <ExpensesDetails/>
      
    </Box>
   
  )
}
export default Planner
