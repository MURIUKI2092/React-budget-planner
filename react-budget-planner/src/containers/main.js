import React, { Fragment } from "react";
import NavigationBar from "../components/navbar";
import Planner from "./planner";


const MainContainer =(children)=>{
  return(
    <Fragment>
      <NavigationBar/>
    <Planner/>

    </Fragment>
    
  )
}
export default MainContainer;
