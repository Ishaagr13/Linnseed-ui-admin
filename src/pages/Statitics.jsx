import React from 'react';
import TopNav from "../Components/TopNav";
import "../pages/Employee.css";
import { IoIosArrowBack } from "react-icons/io";


const Statitics = () => {
  return (
    <div>
    <TopNav />
    <div className="upper-box">
      <div className="adjust">
        <h5>Edit Statistics Price</h5>
      </div>
    </div>
    <div className="tables">
      <div className="subject">
        <div className="circle">
          <IoIosArrowBack className="icon" />
        </div>
        <h5>Edit Statistics</h5>
        
      </div>
      <div className="tabl">
        
      </div>
    </div>
  </div>
  )
}

export default Statitics
