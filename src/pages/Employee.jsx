import React from "react";
import TopNav from "../Components/TopNav";
import "../pages/Employee.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Button from "react-bootstrap/Button";

const Employee = () => {
  return (
    <div>
      <TopNav />
      <div className="upper-box">
        <div className="adjust">
          <h5>Employee Master</h5>
          <div className="cont">
            <a href="">Employee</a>
            <IoIosArrowForward />
            <a href="">Employee Master</a>
            <button className="button-cont">
              CREATE EMPLOYEE
              <i>
                <AiOutlinePlus />{" "}
              </i>
            </button>
          </div>
        </div>
      </div>
      <div className="tables">
        <div className="subject">
          <div className="circle">
            <IoIosArrowBack className="icon" />
          </div>
          <h5>Employee Master List</h5>
          <div className="buts">
            <Button variant="primary">COPY</Button>
            <Button variant="primary">CSV</Button>
            <Button variant="primary">EXCEL</Button>
            <Button variant="primary">PDF</Button>
            <Button variant="primary">PRINT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
