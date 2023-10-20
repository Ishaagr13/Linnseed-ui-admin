import React from "react";
import TopNav from "../../Components/TopNav";
import "../employee/Employee.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

const Mobile = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This function will take you to the previous page
  };
  return (
    <div>
      <TopNav />
      <div className="upper-box">
        <div className="adjust">
          <h5>View Mobile User</h5>
          <div className="cont">
            <a href="">Mobile</a>
            <IoIosArrowForward />
            <a href="">Mobile User</a>
            <button className="button-cont">
              CREATE USER
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
            <IoIosArrowBack className="icon" onClick={goBack}/>
          </div>
          <h5>Total Seller Data</h5>
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

export default Mobile;
