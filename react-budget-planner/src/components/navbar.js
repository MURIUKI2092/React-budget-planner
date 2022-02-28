import React from "react";
import Link from '@mui/material/Link';



const NavigationBar = ()=>{
  return(
    <div className="navbar">
          
    <div className="header">
      <h1>Planner</h1>
      <p><em>let's plan together</em></p>
    </div>
    <div className="links">
    <Link href="#" underline="hover">
        {'Home'}
      </Link>
      <Link href="#" underline="hover">
        {'Login'}
      </Link>
      <Link href="#" underline="hover">
        {'register'}
      </Link>
  
     

    </div>
   



    </div>


  );

}
export default NavigationBar;