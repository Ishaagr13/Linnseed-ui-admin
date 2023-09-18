import React from 'react';
import TopNav from "../Components/TopNav";
import "../pages/Employee.css";
import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";


const CompanyDetails = () => {
  return (
    <div>
      <TopNav />
      <div className="upper-box">
        <div className="adjust">
          <h5>View Gst Detail</h5>
          <div className="cont">
            <a href="">Company</a>
            <IoIosArrowForward />
            <a href="">View Gst Detail</a>
          </div>
        </div>
      </div>
      <div className="tables">
        <div className="subject">
          <div className="circle">
            <IoIosArrowBack className="icon" />
          </div>
          <h5>Organization Information</h5>
        </div>
        <div className="tabl">
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails
